import aggData from './aggregateData';

export default function powerAnalysis(data) {
  data = data
    .filter(arr =>
    Math.trunc(arr[4]) === 1 ||
    Math.trunc(arr[4]) ===2 ||
    Math.trunc(arr[4]) === 3)
    .map(
      (arr) => {
        let datetime = arr.slice(0,2);
        arr.splice(0,2);
        return datetime.concat(
          arr.map(o => {if(o)  {o = parseFloat(o)} else{o = 0} return o})
        )}
  )
  data = aggData(data)
  return data
}