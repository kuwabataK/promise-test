const fs = require('fs');

fs.readFile("hoge.txt", function (err, hoge) {
    fs.readFile("piyo.txt", function (err, piyo) {
        fs.readFile("nyan.txt", function (err, nyan) {
            fs.readFile("myon.txt", function (err, myon) {
                console.log(hoge + piyo + nyan + myon);
            });
        });
    });
});