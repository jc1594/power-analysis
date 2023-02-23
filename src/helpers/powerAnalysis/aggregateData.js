import { binRows, binTimeRows } from './binData';
import { sumValues, formatArr } from '../arrHelpers';

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

export function aggTimeData(rawData, time) {
  let eegArrs = { wake: [], sleep: [], rem: [] },
    bin;

  const binTime = time * 3600;

  console.log(binTime);

  for (let row of rawData) {
    row[1] = row[1].trim();

    //row[3];

    switch (row[4]) {
      case 1:
        bin = binTimeRows(row, eegArrs.wake);
        eegArrs.wake = bin[0] ? bin[0] : eegArrs.wake;
        break;

      case 2:
        bin = binTimeRows(row, eegArrs.sleep);
        eegArrs.sleep = bin[0] ? bin[0] : eegArrs.sleep;
        break;

      case 3:
        bin = binTimeRows(row, eegArrs.rem);
        eegArrs.rem = bin[0] ? bin[0] : eegArrs.rem;
        break;

      default:
        break;
    }
  }

  // for (let arr in eegArrs) {
  //   arr.filter((a) => a[3] <= binTime);
  // }

  console.log(eegArrs.wake);

  const wTotalI = eegArrs.wake.length ? sumValues(eegArrs.wake.slice(0, 7)) : 0;
  const wTotalII = eegArrs.wake.length ? sumValues(eegArrs.wake.slice(7)) : 0;
  const sTotalI = eegArrs.sleep.length
    ? sumValues(eegArrs.sleep.slice(0, 7))
    : 0;
  const sTotalII = eegArrs.sleep.length ? sumValues(eegArrs.sleep.slice(7)) : 0;
  const rTotalI = eegArrs.rem.length ? sumValues(eegArrs.rem.slice(0, 7)) : 0;
  const rTotalII = eegArrs.rem.length ? sumValues(eegArrs.rem.slice(7)) : 0;

  let wakeArr = formatArr('Wake', eegArrs.wake, wTotalI, wTotalII);
  let sleepArr = formatArr('Sleep', eegArrs.sleep, sTotalI, sTotalII);
  let remArr = formatArr('Rem', eegArrs.rem, rTotalI, rTotalII);

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
