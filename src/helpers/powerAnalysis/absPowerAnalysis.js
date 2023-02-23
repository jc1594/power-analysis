import { aggregate, groupAndPivot } from './aggAbsPowerData';

export default function absPowerAnalysis(data) {
  // each arr has 3 vals we're aggregating
  let arrLen = 3;

  data = data.slice(7).map((arr) => {
    arr = arr.slice(4, 8).map((o) => {
      o = parseFloat(o);
      if (isNaN(o)) {
        o = 0;
      }
      return o;
    });
    arr[0] = Math.floor(arr[0]);
    return arr;
  });

  data = aggregate(groupAndPivot(data, arrLen));
  data.unshift([
    'Frequency (Hz)',
    'Wake - Mean',
    'Non REM - Mean',
    'REM - Mean',
  ]);

  console.log(data);
  return data;
}
