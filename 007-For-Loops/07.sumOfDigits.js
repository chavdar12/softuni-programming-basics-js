function sumOfDigits(input) {
    let sum = 0;
    for (const digit of input[0]) {
        sum += Number(digit);
    }
    console.log(`The sum of the digits is:${sum}`);
}

module.exports = sumOfDigits;
