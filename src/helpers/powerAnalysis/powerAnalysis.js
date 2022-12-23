import { aggData, aggTimeData } from './aggregateData';

export default function powerAnalysis(data, time) {
  console.log(data);
  data = data
    .filter(
      (arr) =>
        Math.trunc(arr[4]) === 1 ||
        Math.trunc(arr[4]) === 2 ||
        Math.trunc(arr[4]) === 3
    )
    .map((arr) => {
      let datetime = arr.slice(0, 2);
      arr.splice(0, 2);
      arr = arr.map((o) => {
        o = parseFloat(o);
        if (isNaN(o)) {
          o = 0;
        }
        return o;
      });
      return datetime.concat(arr);
    });
  // console.log(data)
  if (time) {
    data = aggTimeData(data);
  } else {
    data = aggData(data);
  }
  return data;
}
