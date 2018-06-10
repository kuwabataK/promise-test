const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function readFiles(){
    var hoge = await readFileAsync("hoge.txt")
    var fuga = await readFileAsync("fuga.txt") 
    var foo = await readFileAsync("foo.txt") 
    var bar = await readFileAsync("bar.txt")
    console.log(hoge + fuga + foo + bar);
}

readFiles()
