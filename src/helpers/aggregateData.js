import { binRows, binRowsArr } from './binData';


//TODO Add other outputs, clean code, deploy

export function aggData(rawData) {

  let wakeDarkObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let sleepDarkObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let remDarkObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let wakeLightObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let sleepLightObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let remLightObj = {
    eeg2a : 0,
    eeg2b : 0,
    eeg2g : 0,
    eeg2d : 0,
    eeg2t : 0,
    eeg2hg : 0,
    eeg2i : 0,
    eeg2s : 0,
    eeg1a : 0,
    eeg1b : 0,
    eeg1g : 0,
    eeg1d : 0,
    eeg1t : 0,
    eeg1hg : 0,
    eeg1i : 0,
    eeg1s : 0
  };

  let bin;

  for (let row of rawData) {

    console.log(row)

    switch (row[5]) {

      case 1 :
        bin = binRows(row, wakeDarkObj, wakeLightObj);
        wakeDarkObj = (bin[0]) ? bin[0] : wakeDarkObj;
        wakeLightObj = (bin[1]) ? bin[1] : wakeLightObj;
        break;

      case 2:
        bin = binRows(row, sleepDarkObj, sleepLightObj);
        sleepDarkObj = (bin[0]) ? bin[0] : sleepDarkObj;
        sleepLightObj = (bin[1]) ? bin[1] : sleepLightObj;
        break;

      case 3:
        bin = binRows(row, remDarkObj, remLightObj);
        remDarkObj = (bin[0]) ? bin[0] :remDarkObj;
        remLightObj = (bin[1]) ? bin[1] :remLightObj;
        break;

      default:
        break;
    }
  }

  const sumValues = obj => Object.values(obj).reduce((a, b) => a + b)
  const wakeLightTotalI = sumValues(Object.entries(wakeLightObj).slice(0,8).map(entry => entry[1]));
  const wakeLightTotalII = sumValues(Object.entries(wakeLightObj).slice(8).map(entry => entry[1]));
  const wakeDarkTotalI = sumValues(Object.entries(wakeDarkObj).slice(0,8).map(entry => entry[1]));
  const wakeDarkTotalII = sumValues(Object.entries(wakeDarkObj).slice(8).map(entry => entry[1]));
  const sleepLightTotalI = sumValues(Object.entries(sleepLightObj).slice(0,8).map(entry => entry[1]));
  const sleepLightTotalII = sumValues(Object.entries(sleepLightObj).slice(8).map(entry => entry[1]));
  const sleepDarkTotalI = sumValues(Object.entries(sleepDarkObj).slice(0,8).map(entry => entry[1]));
  const sleepDarkTotalII = sumValues(Object.entries(sleepDarkObj).slice(8).map(entry => entry[1]));
  const remLightTotalI = sumValues(Object.entries(remLightObj).slice(0,8).map(entry => entry[1]));
  const remLightTotalII = sumValues(Object.entries(remLightObj).slice(8).map(entry => entry[1]));
  const remDarkTotalI = sumValues(Object.entries(remDarkObj).slice(0,8).map(entry => entry[1]));
  const remDarkTotalII = sumValues(Object.entries(remDarkObj).slice(8).map(entry => entry[1]));

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
    [
      'Wake Light',
      wakeLightObj.eeg2a/wakeLightTotalI,
      wakeLightObj.eeg2b/wakeLightTotalI,
      wakeLightObj.eeg2g/wakeLightTotalI,
      wakeLightObj.eeg2d/wakeLightTotalI,
      wakeLightObj.eeg2t/wakeLightTotalI,
      wakeLightObj.eeg2hg/wakeLightTotalI,
      wakeLightObj.eeg2i/wakeLightTotalI,
      wakeLightObj.eeg2s/wakeLightTotalI,
      wakeLightObj.eeg1a/wakeLightTotalII,
      wakeLightObj.eeg1b/wakeLightTotalII,
      wakeLightObj.eeg1g/wakeLightTotalII,
      wakeLightObj.eeg1d/wakeLightTotalII,
      wakeLightObj.eeg1t/wakeLightTotalII,
      wakeLightObj.eeg1hg/wakeLightTotalII,
      wakeLightObj.eeg1i/wakeLightTotalII,
      wakeLightObj.eeg1s/wakeLightTotalII
    ],
    [
      'Wake Dark',
      wakeDarkObj.eeg2a/wakeDarkTotalI,
      wakeDarkObj.eeg2b/wakeDarkTotalI,
      wakeDarkObj.eeg2g/wakeDarkTotalI,
      wakeDarkObj.eeg2d/wakeDarkTotalI,
      wakeDarkObj.eeg2t/wakeDarkTotalI,
      wakeDarkObj.eeg2hg/wakeDarkTotalI,
      wakeDarkObj.eeg2i/wakeDarkTotalI,
      wakeDarkObj.eeg2s/wakeDarkTotalI,
      wakeDarkObj.eeg1a/wakeDarkTotalII,
      wakeDarkObj.eeg1b/wakeDarkTotalII,
      wakeDarkObj.eeg1g/wakeDarkTotalII,
      wakeDarkObj.eeg1d/wakeDarkTotalII,
      wakeDarkObj.eeg1t/wakeDarkTotalII,
      wakeDarkObj.eeg1hg/wakeDarkTotalII,
      wakeDarkObj.eeg1i/wakeDarkTotalII,
      wakeDarkObj.eeg1s/wakeDarkTotalII
    ],
    [
      'NREM Light',
      sleepLightObj.eeg2a/sleepLightTotalI,
      sleepLightObj.eeg2b/sleepLightTotalI,
      sleepLightObj.eeg2g/sleepLightTotalI,
      sleepLightObj.eeg2d/sleepLightTotalI,
      sleepLightObj.eeg2t/sleepLightTotalI,
      sleepLightObj.eeg2hg/sleepLightTotalI,
      sleepLightObj.eeg2i/sleepLightTotalI,
      sleepLightObj.eeg2s/sleepLightTotalI,
      sleepLightObj.eeg1a/sleepLightTotalII,
      sleepLightObj.eeg1b/sleepLightTotalII,
      sleepLightObj.eeg1g/sleepLightTotalII,
      sleepLightObj.eeg1d/sleepLightTotalII,
      sleepLightObj.eeg1t/sleepLightTotalII,
      sleepLightObj.eeg1hg/sleepLightTotalII,
      sleepLightObj.eeg1i/sleepLightTotalII,
      sleepLightObj.eeg1s/sleepLightTotalII
    ],
    [
      'NREM Dark',
      sleepDarkObj.eeg2a/sleepDarkTotalI,
      sleepDarkObj.eeg2b/sleepDarkTotalI,
      sleepDarkObj.eeg2g/sleepDarkTotalI,
      sleepDarkObj.eeg2d/sleepDarkTotalI,
      sleepDarkObj.eeg2t/sleepDarkTotalI,
      sleepDarkObj.eeg2hg/sleepDarkTotalI,
      sleepDarkObj.eeg2i/sleepDarkTotalI,
      sleepDarkObj.eeg2s/sleepDarkTotalI,
      sleepDarkObj.eeg1a/sleepDarkTotalII,
      sleepDarkObj.eeg1b/sleepDarkTotalII,
      sleepDarkObj.eeg1g/sleepDarkTotalII,
      sleepDarkObj.eeg1d/sleepDarkTotalII,
      sleepDarkObj.eeg1t/sleepDarkTotalII,
      sleepDarkObj.eeg1hg/sleepDarkTotalII,
      sleepDarkObj.eeg1i/sleepDarkTotalII,
      sleepDarkObj.eeg1s/sleepDarkTotalII
    ],
    [
      'REM Light',
      remLightObj.eeg2a/remLightTotalI,
      remLightObj.eeg2b/remLightTotalI,
      remLightObj.eeg2g/remLightTotalI,
      remLightObj.eeg2d/remLightTotalI,
      remLightObj.eeg2t/remLightTotalI,
      remLightObj.eeg2hg/remLightTotalI,
      remLightObj.eeg2i/remLightTotalI,
      remLightObj.eeg2s/remLightTotalI,
      remLightObj.eeg1a/remLightTotalII,
      remLightObj.eeg1b/remLightTotalII,
      remLightObj.eeg1g/remLightTotalII,
      remLightObj.eeg1d/remLightTotalII,
      remLightObj.eeg1t/remLightTotalII,
      remLightObj.eeg1hg/remLightTotalII,
      remLightObj.eeg1i/remLightTotalII,
      remLightObj.eeg1s/remLightTotalII
    ],
    [
      'REM Dark',
      remDarkObj.eeg2a/remDarkTotalI,
      remDarkObj.eeg2b/remDarkTotalI,
      remDarkObj.eeg2g/remDarkTotalI,
      remDarkObj.eeg2d/remDarkTotalI,
      remDarkObj.eeg2t/remDarkTotalI,
      remDarkObj.eeg2hg/remDarkTotalI,
      remDarkObj.eeg2i/remDarkTotalI,
      remDarkObj.eeg2s/remDarkTotalI,
      remDarkObj.eeg1a/remDarkTotalII,
      remDarkObj.eeg1b/remDarkTotalII,
      remDarkObj.eeg1g/remDarkTotalII,
      remDarkObj.eeg1d/remDarkTotalII,
      remDarkObj.eeg1t/remDarkTotalII,
      remDarkObj.eeg1hg/remDarkTotalII,
      remDarkObj.eeg1i/remDarkTotalII,
      remDarkObj.eeg1s/remDarkTotalII
    ]
  ]

  console.log(outArr)

  return outArr
}


export function aggDataArr(rawData) {

  let wakeDark = [], sleepDark = [], remDark = [], wakeLight = [], sleepLight = [], remLight = [], bin;

  for (let row of rawData) {

    switch (row[5]) {

      case 1 :
        bin = binRowsArr(row, wakeDark, wakeLight);
        wakeDark = (bin[0]) ? bin[0] : wakeDark;
        wakeLight = (bin[1]) ? bin[1] : wakeLight;
        break;

      case 2:
        bin = binRowsArr(row, sleepDark, sleepLight);
        sleepDark = (bin[0]) ? bin[0] : sleepDark;
        sleepLight = (bin[1]) ? bin[1] : sleepLight;
        break;

      case 3:
        bin = binRowsArr(row, remDark, remLight);
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