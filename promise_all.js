const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);


var hoge = readFileAsync("hoge.txt")
var fuga = readFileAsync("fuga.txt")
var foo = readFileAsync("foo.txt")
var bar = readFileAsync("bar.txt")

Promise.all([hoge, fuga, foo, bar])
    .then(
        (values) => { console.log(values[0] + values[1] + values[2] + values[3]) }
    )
