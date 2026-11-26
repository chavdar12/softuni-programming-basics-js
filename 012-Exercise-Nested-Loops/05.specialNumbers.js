function specialNumbers(input) {
    const n = Number(input[0]);
    const result = [];
    for (let number = 1111; number <= 9999; number++) {
        let special = true;
        for (const digit of String(number)) {
            // A digit of 0 gives NaN, which also fails the check.
            if (n % Number(digit) !== 0) {
                special = false;
                break;
            }
        }
        if (special) {
            result.push(number);
        }
    }
    console.log(result.join(' '));
}

module.exports = specialNumbers;
