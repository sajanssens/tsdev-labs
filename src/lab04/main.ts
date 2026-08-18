for (var i = 0; i < 2; i++) {
    let j = i;
    console.log(i, j);

    setTimeout(function () {
        console.log(i, j);
    }, 0);
}

for (let i = 0; i < 2; i++) {
    let j = i;
    console.log(i, j);

    setTimeout(function () {
        console.log(i, j);
    }, 0);
}