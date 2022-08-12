export function binRows(row, darkArr, lightArr) {

  if (row[1].length > 10) {alert(`Time is incorrectly formatted: ${row[1]}`)}

  const time = row[1].trim()
  row = row.slice(5,19)

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

export function binTimeRows(row, Arr) {

  if (row[1].length > 10) {alert(`Time is incorrectly formatted: ${row[1]}`)}

  // const time = row[1].trim()
  row = row.slice(5,19)

  // if (time >= '06:00:00' && time < '18:00:00') {
  //   //console.log(row[1])
  //   if(lightArr.length > 0) {
  //     lightArr = lightArr.map((o,i) => o + row[i] )
  //   }
  //   else {lightArr = lightArr.concat(row)}
  // }

  // else {
    if(Arr.length > 0) {
      Arr = Arr.map((o,i) => o + row[i] )
    }
    else {Arr = Arr.concat(row)}
  // }

  return [
    Arr
  ]
}