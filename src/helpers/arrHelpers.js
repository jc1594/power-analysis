const sumValues = (arr) => arr.reduce((a, b) => a + b);

const divByTotal = (o, total) => {
  if (total > 0) {
    return `${(o / total) * 100}%`;
  } else {
    return `${0}%`;
  }
};

const formatArr = (arrName, arr, totalA, totalB) => {
  let array = arr
    .slice(0, 7)
    .map((o) => divByTotal(o, totalA))
    .concat(arr.slice(7).map((o) => divByTotal(o, totalB)));
  array.unshift(arrName);
  return array;
};

const arrToObj = (arr) => {
  let obj = {};
  arr.forEach((a) => {
    const key = a[0];
    obj[key] = a[1];
  });
  return obj;
};

const arrayFactory = (arrLen) => {
  let outArr = [];
  for (let i = 0; i < arrLen; i++) {
    outArr.push([]);
  }
  return outArr;
};

const arrAvg = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
};

export { sumValues, formatArr, arrToObj, arrayFactory, arrAvg };
