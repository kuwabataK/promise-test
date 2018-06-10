var promise = (str) => {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, str);
    })
};

promise("foo").then(
    (val) => {
        console.log(val)
        return promise("bar")
    }
).then(
    (val) => { console.log(val) }
).catch(
    (err) => { console.log(err) }
)