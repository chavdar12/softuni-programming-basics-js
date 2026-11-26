function invalidNumber(input) {
    const n = Number(input[0]);
    if (!(n === 0 || (n >= 100 && n <= 200))) {
        console.log('invalid');
    }
}

module.exports = invalidNumber;
