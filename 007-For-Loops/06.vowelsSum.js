function vowelsSum(input) {
    const values = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    let sum = 0;
    for (const letter of input[0]) {
        sum += values[letter] ?? 0;
    }
    console.log(sum);
}

module.exports = vowelsSum;
