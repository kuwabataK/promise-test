const fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)

var hoge, fuga, foo, bar

readFileAsync("hoge.txt")
    .then(
        (result) => { 
            hoge = result
            return readFileAsync("fuga.txt") }
    ).then(
        (result) => {
            fuga = result 
            return readFileAsync("foo.txt") }
    ).then(
        (result) => {
            foo = result
            return readFileAsync("bar.txt") }
    )
    .then(
        (result) => { 
            bar = result
            console.log(hoge + fuga + foo + bar) }
    )