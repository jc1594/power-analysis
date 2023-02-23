export default class FileHelper {
  static nameFile(outputType) {
    //takes output type of relative_power or absolute_power
    const runDate = new Date();

    const runStamp = `${
      runDate.getMonth() + 1
    }${runDate.getDate()}${runDate.getFullYear()}_${runDate.getHours()}:${runDate.getMinutes()}`;
    switch (outputType) {
      case 'rel_power':
        return `Relative Power_${runStamp}`;
      case 'abs_power':
        return `Absolute Power_${runStamp}`;
      default:
        return `Output_${runStamp}`;
    }
  }
}
