import { aggDataArr } from './aggregateData';

export default function powerAnalysis(data, params) {
  data = data
    .filter(arr =>
    Math.trunc(arr[5]) === 1 ||
    Math.trunc(arr[5]) ===2 ||
    Math.trunc(arr[5]) === 3)
    .map(
      (arr) => {let datetime = arr.slice(0,2);
        arr.splice(0,2);
        return datetime.concat(arr.map(o => {if(o)  {o = parseFloat(o)} else{o = 0}; return o}))}
  )
  data = aggDataArr(data)
  return data
}