const fs = require("fs");
const { parse } = require("csv-parse");

class Tables {

    init(connection) {
        this.connection = connection;
        this.csvReader('./public/Digivolution_Requirements.csv')
    }

    csvReader(path) {
        fs.createReadStream(path).pipe(parse( {
            delimiter: '\t',
            from_line: 2
        })).on('data',function(row) {
            console.log(row);
        })
    }
}

module.exports = new Tables;