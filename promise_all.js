const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);


var hoge = readFileAsync("hoge.txt")
var piyo = readFileAsync("piyo.txt")
var nyan = readFileAsync("nyan.txt")
var myon = readFileAsync("myon.txt")

Promise.all([hoge, piyo, nyan, myon])
    .then(
        (values) => { console.log(values[0] + values[1] + values[2] + values[3]) }
    )
