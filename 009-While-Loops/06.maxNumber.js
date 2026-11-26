function maxNumber(input) {
    let max = -Infinity;
    let i = 0;
    while (input[i] !== 'Stop') {
        max = Math.max(max, Number(input[i++]));
    }
    console.log(max);
}

module.exports = maxNumber;
