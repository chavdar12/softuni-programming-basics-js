function minNumber(input) {
    let min = Infinity;
    let i = 0;
    while (input[i] !== 'Stop') {
        min = Math.min(min, Number(input[i++]));
    }
    console.log(min);
}

module.exports = minNumber;
