const fs = require('fs');

var hode = fs.readFile("hoge.txt")
var fuga = fs.readFile("fuga.txt") 
var foo = fs.readFile("foo.txt") 
var bar = fs.readFile("bar.txt")
console.log(hoge + fuga + foo + bar);