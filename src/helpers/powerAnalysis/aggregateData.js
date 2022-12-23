import { binRows, binTimeRows } from './binData';

export function aggData(rawData) {
  let wakeDark = [],
    sleepDark = [],
    remDark = [],
    wakeLight = [],
    sleepLight = [],
    remLight = [],
    bin;

  for (let row of rawData) {
    row[1] = row[1].trim();

    switch (row[4]) {
      case 1:
        bin = binRows(row, wakeDark, wakeLight);
        wakeDark = bin[0] ? bin[0] : wakeDark;
        wakeLight = bin[1] ? bin[1] : wakeLight;
        break;

      case 2:
        bin = binRows(row, sleepDark, sleepLight);
        sleepDark = bin[0] ? bin[0] : sleepDark;
        sleepLight = bin[1] ? bin[1] : sleepLight;
        break;

      case 3:
        bin = binRows(row, remDark, remLight);
        remDark = bin[0] ? bin[0] : remDark;
        remLight = bin[1] ? bin[1] : remLight;
        break;

      default:
        break;
    }
  }

  // console.log(wakeLight)

  const wlTotalI = wakeLight.length ? sumValues(wakeLight.slice(0, 7)) : 0;
  const wlTotalII = wakeLight.length ? sumValues(wakeLight.slice(7)) : 0;
  const wdTotalI = wakeDark.length ? sumValues(wakeDark.slice(0, 7)) : 0;
  const wdTotalII = wakeDark.length ? sumValues(wakeDark.slice(7)) : 0;
  const slTotalI = sleepLight.length ? sumValues(sleepLight.slice(0, 7)) : 0;
  const slTotalII = sleepLight.length ? sumValues(sleepLight.slice(7)) : 0;
  const sdTotalI = sleepDark.length ? sumValues(sleepDark.slice(0, 7)) : 0;
  const sdTotalII = sleepDark.length ? sumValues(sleepDark.slice(7)) : 0;
  const rlTotalI = remLight.length ? sumValues(remLight.slice(0, 7)) : 0;
  const rlTotalII = remLight.length ? sumValues(remLight.slice(7)) : 0;
  const rdTotalI = remDark.length ? sumValues(remDark.slice(0, 7)) : 0;
  const rdTotalII = remDark.length ? sumValues(remDark.slice(7)) : 0;

  let wakeLightArr = formatArr('Wake Light', wakeLight, wlTotalI, wlTotalII);
  let wakeDarkArr = formatArr('Wake Dark', wakeDark, wdTotalI, wdTotalII);
  let sleepLightArr = formatArr('Sleep Light', sleepLight, slTotalI, slTotalII);
  let sleepDarkArr = formatArr('Sleep Dark', sleepDark, sdTotalI, sdTotalII);
  let remLightArr = formatArr('Rem Light', remLight, rlTotalI, rlTotalII);
  let remDarkArr = formatArr('Rem Dark', remDark, rdTotalI, rdTotalII);

  return [
    [
      '',
      'EEG 2_Alpha',
      'EEG 2_Beta',
      'EEG 2_Gamma',
      'EEG 2_Delta',
      'EEG 2_Theta',
      'EEG 2_High Gamma',
      'EEG 2_Sigma',
      'EEG 1_Alpha',
      'EEG 1_Beta',
      'EEG 1_Gamma',
      'EEG 1_Delta',
      'EEG 1_Theta',
      'EEG 1_High Gamma',
      'EEG 1_Sigma',
    ],
    wakeLightArr,
    wakeDarkArr,
    sleepLightArr,
    sleepDarkArr,
    remLightArr,
    remDarkArr,
  ];
}

export function aggTimeData(rawData) {
  let wake = [],
    sleep = [],
    rem = [],
    bin;

  for (let row of rawData) {
    row[1] = row[1].trim();

    switch (row[4]) {
      case 1:
        bin = binTimeRows(row, wake);
        wake = bin[0] ? bin[0] : wake;
        break;

      case 2:
        bin = binTimeRows(row, sleep);
        sleep = bin[0] ? bin[0] : sleep;
        break;

      case 3:
        bin = binTimeRows(row, rem);
        rem = bin[0] ? bin[0] : rem;
        break;

      default:
        break;
    }
  }

  // console.log(wake)

  const wTotalI = wake.length ? sumValues(wake.slice(0, 7)) : 0;
  const wTotalII = wake.length ? sumValues(wake.slice(7)) : 0;
  const sTotalI = sleep.length ? sumValues(sleep.slice(0, 7)) : 0;
  const sTotalII = sleep.length ? sumValues(sleep.slice(7)) : 0;
  const rTotalI = rem.length ? sumValues(rem.slice(0, 7)) : 0;
  const rTotalII = rem.length ? sumValues(rem.slice(7)) : 0;

  let wakeArr = formatArr('Wake', wake, wTotalI, wTotalII);
  let sleepArr = formatArr('Sleep', sleep, sTotalI, sTotalII);
  let remArr = formatArr('Rem', rem, rTotalI, rTotalII);

  return [
    [
      '',
      'EEG 2_Alpha',
      'EEG 2_Beta',
      'EEG 2_Gamma',
      'EEG 2_Delta',
      'EEG 2_Theta',
      'EEG 2_High Gamma',
      'EEG 2_Sigma',
      'EEG 1_Alpha',
      'EEG 1_Beta',
      'EEG 1_Gamma',
      'EEG 1_Delta',
      'EEG 1_Theta',
      'EEG 1_High Gamma',
      'EEG 1_Sigma',
    ],
    wakeArr,
    sleepArr,
    remArr,
  ];
}

//TODO Pull out these helpers

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
