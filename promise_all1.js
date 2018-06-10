const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function readFiles() {
    var hoge = readFileAsync("hoge.txt")
    var fuga = readFileAsync("fuga.txt")
    var foo = readFileAsync("foo.txt")
    var bar = readFileAsync("bar.txt")

    var values = await Promise.all([hoge, fuga, foo, bar])
    console.log(values[0] + values[1] + values[2] + values[3])
}

readFiles()
