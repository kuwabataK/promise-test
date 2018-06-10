const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function readFiles() {
    var hoge = await readFileAsync("hoge.txt")
    var piyo = await readFileAsync("piyo.txt")
    var nyan = await readFileAsync("nyan.txt")
    var myon = await readFileAsync("myon.txt")
    console.log(hoge + piyo + nyan + myon);
}

readFiles().then(
    () => { console.log("readFiles()は終わった！！") }
)