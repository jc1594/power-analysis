import Papa from 'papaparse';

export class CsvHelper {
  static async parseCsv(file, callback, params) {
    await Papa.parse(file, {
      header: false,
      delimiter: '\t',
      complete: (results) => {
        callback(results.data, params);
      },
    });
  }

  static async unparseCsv(data) {
    await Papa.unparse(data);
  }
}
