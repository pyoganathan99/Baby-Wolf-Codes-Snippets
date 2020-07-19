arr.filter(e => (e % 5) == 0);


arr.reduce(function (acc, e) {
    return acc + e;
}, 0);

arr.forEach(e=>{
    // Do something with e
});