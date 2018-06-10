const fs = require('fs');

var hode = fs.readFile("hoge.txt")
var piyo = fs.readFile("piyo.txt") 
var nyan = fs.readFile("nyan.txt") 
var myon = fs.readFile("myon.txt")
console.log(hoge + piyo + nyan + myon);