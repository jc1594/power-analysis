import { aggregate, groupAndPivot } from './aggAbsPowerData';

export default function absPowerAnalysis(data) {
  // each arr has 3 vals we're aggregating
  let arrLen = 3;
  console.log(data);

  data = data
    .slice(6)
    .map((arr) => {
      arr = arr.slice(0, 4).map((o) => {
        o = parseFloat(o);
        if (isNaN(o)) {
          o = 0;
        }
        return o;
      });
      if (arr[0] >= 0.5) {
        arr[0] = Math.floor(arr[0]);
      }
      return arr;
    })
    .filter((arr) => {
      return arr[0] >= 0.5 || arr[0] === 0;
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
