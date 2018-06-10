const fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)

var hoge, piyo, nyan, myon

readFileAsync("hoge.txt")
    .then(
        (result) => { 
            hoge = result
            return readFileAsync("piyo.txt") }
    ).then(
        (result) => {
            piyo = result 
            return readFileAsync("nyan.txt") }
    ).then(
        (result) => {
            nyan = result
            return readFileAsync("myon.txt") }
    )
    .then(
        (result) => { 
            myon = result
            console.log(hoge + piyo + nyan + myon) }
    )