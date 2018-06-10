const fs = require('fs');

fs.readFile("hoge.txt", function (err, hoge) {
    fs.readFile("fuga.txt", function (err, fuga) {
        fs.readFile("foo.txt", function (err, foo) {
            fs.readFile("bar.txt", function (err, bar) {
                console.log(hoge + fuga + foo + bar);
            });
        });
    });
});