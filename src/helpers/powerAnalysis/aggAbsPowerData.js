import { arrAvg, arrayFactory } from '../arrHelpers';

const groupAndPivot = (data, arrLen) => {
  const obj = {};
  for (let arr of data) {
    let key = arr[0];
    if (!(key in obj)) {
      obj[key] = arrayFactory(arrLen);
    }
    let val = obj[key];
    for (let i = 0; i < arrLen; i++) {
      val[i].push(arr[i + 1]);
    }
  }
  return { pivot: obj, arrLen };
};

const aggregate = (params) => {
  const arr = [];
  for (const [key, val] of Object.entries(params.pivot)) {
    let grp = [key];
    for (let i = 0; i < params.arrLen; i++) {
      grp.push(arrAvg(val[i]));
    }
    arr.push(grp);
  }
  return arr;
};

// in effect we scan DATA twice
// so runtime is ~proportional to size of DATA

export { groupAndPivot, aggregate };
