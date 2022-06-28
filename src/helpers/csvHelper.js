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

    static arrToObj(arr) {
        let obj = {};
        arr.forEach((a) => {
            const key = a[0];
            obj[key] = a[1];
        });
        return obj;
    }
}
