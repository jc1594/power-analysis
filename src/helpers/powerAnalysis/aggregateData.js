import binRows from './binData';

export default function aggData(rawData) {

  let wakeDark = [], sleepDark = [], remDark = [], wakeLight = [], sleepLight = [], remLight = [], bin;

  for (let row of rawData) {

    switch (row[5]) {

      case 1 :
        bin = binRows(row, wakeDark, wakeLight);
        wakeDark = (bin[0]) ? bin[0] : wakeDark;
        wakeLight = (bin[1]) ? bin[1] : wakeLight;
        break;

      case 2:
        bin = binRows(row, sleepDark, sleepLight);
        sleepDark = (bin[0]) ? bin[0] : sleepDark;
        sleepLight = (bin[1]) ? bin[1] : sleepLight;
        break;

      case 3:
        bin = binRows(row, remDark, remLight);
        remDark = (bin[0]) ? bin[0] :remDark;
        remLight = (bin[1]) ? bin[1] :remLight;
        break;

      default:
        break;
    }
  }

  const wlTotalI = (wakeLight.length) ? sumValues(wakeLight.slice(0,8)) : 0;
  const wlTotalII = (wakeLight.length) ? sumValues(wakeLight.slice(8)) : 0;
  const wdTotalI = (wakeDark.length) ?  sumValues(wakeDark.slice(0,8)) : 0;
  const wdTotalII = (wakeDark.length) ? sumValues(wakeDark.slice(8)) : 0;
  const slTotalI = (sleepLight.length) ? sumValues(sleepLight.slice(0,)) : 0;
  const slTotalII = (sleepLight.length) ? sumValues(sleepLight.slice(8)) : 0;
  const sdTotalI = (sleepDark.length) ? sumValues(sleepDark.slice(0,8)) : 0;
  const sdTotalII = (sleepDark.length) ? sumValues(sleepDark.slice(8)) : 0;
  const rlTotalI = (remLight.length) ? sumValues(remLight.slice(0,8)) : 0;
  const rlTotalII = (remLight.length) ? sumValues(remLight.slice(8)) : 0;
  const rdTotalI = (remDark.length) ? sumValues(remDark.slice(0,8)) : 0;
  const rdTotalII = (remDark.length) ? sumValues(remDark.slice(8)) : 0;


  let wakeLightArr =  formatArr('Wake Light',wakeLight,wlTotalI,wlTotalII)
  let wakeDarkArr =  formatArr('Wake Dark',wakeDark,wdTotalI,wdTotalII)
  let sleepLightArr =  formatArr('Sleep Light',sleepLight,slTotalI,slTotalII)
  let sleepDarkArr =  formatArr('Sleep Dark',sleepDark,sdTotalI,sdTotalII)
  let remLightArr =  formatArr('Rem Light',remLight,rlTotalI,rlTotalII)
  let remDarkArr =  formatArr('Rem Dark',remDark,rdTotalI,rdTotalII)

  const outArr = [[
    '',
    'EEG 2_Alpha',
    'EEG 2_Beta',
    'EEG 2_Gamma',
    'EEG 2_Delta',
    'EEG 2_Theta',
    'EEG 2_High Gamma',
    'EEG 2_Infraslow',
    'EEG 2_Sigma',
    'EEG 1_Alpha',
    'EEG 1_Beta',
    'EEG 1_Gamma',
    'EEG 1_Delta',
    'EEG 1_Theta',
    'EEG 1_High Gamma',
    'EEG 1_Infraslow',
    'EEG 1_Sigma'
  ],
    wakeLightArr,
    wakeDarkArr,
    sleepLightArr,
    sleepDarkArr,
    remLightArr,
    remDarkArr
  ]

  console.log(outArr)
  return outArr
}

const sumValues = arr => arr.reduce((a, b) => a + b)

const divByTotal = (o,total) => {
  if (total > 0) {
    return `${(o/total)*100}%`
  } else {
    return `${0}%`
  }
}

const formatArr = (arrName,arr,totalA,totalB) => {
  let array = arr.slice(0,8).map(o => divByTotal(o,totalA)).concat(arr.slice(8).map(o => divByTotal(o,totalB)))
  array.unshift(arrName)
  return array
}