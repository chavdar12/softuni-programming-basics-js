function evenPowersOf2(input) {
    for (let i = 0; i <= Number(input[0]); i += 2) {
        console.log(2 ** i);
    }
}

module.exports = evenPowersOf2;
