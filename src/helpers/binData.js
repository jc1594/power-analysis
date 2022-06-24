export function binRows(row, darkObj, lightObj) {

  if (row[1].length > 10) {throw(`Time is incorrectly formatted: ${row[1]}`)};

  const time = row[1].trim()

  if (time >= '06:00:00' && time < '18:00:00') {
    //console.log(row[1])
    //add separate bins for column E = 1, 2, 3
    lightObj.eeg2a += row[6];
    lightObj.eeg2b += row[7];
    lightObj.eeg2g += row[8];
    lightObj.eeg2d += row[9];
    lightObj.eeg2t += row[10];
    lightObj.eeg2hg += row[11];
    lightObj.eeg2i += row[12];
    lightObj.eeg2s += row[13];
    lightObj.eeg1a += row[14];
    lightObj.eeg1b += row[15];
    lightObj.eeg1g += row[16];
    lightObj.eeg1d += row[17];
    lightObj.eeg1t += row[18];
    lightObj.eeg1hg += row[19];
    lightObj.eeg1i += row[20];
    lightObj.eeg1s += row[21];
  }

  else {
    darkObj.eeg2a += row[6]
    darkObj.eeg2b += row[7];
    darkObj.eeg2g += row[8];
    darkObj.eeg2d += row[9];
    darkObj.eeg2t += row[10];
    darkObj.eeg2hg += row[11];
    darkObj.eeg2i += row[12];
    darkObj.eeg2s += row[13];
    darkObj.eeg1a += row[14];
    darkObj.eeg1b += row[15];
    darkObj.eeg1g += row[16];
    darkObj.eeg1d += row[17];
    darkObj.eeg1t += row[18];
    darkObj.eeg1hg += row[19];
    darkObj.eeg1i += row[20];
    darkObj.eeg1s += row[21];
  }

  return {
    darkObj,
    lightObj
  }

}


export function binRowsArr(row, darkArr, lightArr) {

  if (row[1].length > 10) {throw(`Time is incorrectly formatted: ${row[1]}`)};

  const time = row[1].trim()
  row = row.slice(6,22)

  if (time >= '06:00:00' && time < '18:00:00') {
    //console.log(row[1])
    //add separate bins for column E = 1, 2, 3
    if(lightArr.length > 0) {
      lightArr = lightArr.map((o,i) => o + row[i] )
    }
    else {lightArr = lightArr.concat(row)}
  }

  else {
    if(darkArr.length > 0) {
      darkArr = darkArr.map((o,i) => o + row[i] )
    }
    else {darkArr = darkArr.concat(row)}
  }

  return [
    darkArr,
    lightArr
  ]
}