function numbersDivisibleBy9(input) {
    const numbers = [];
    for (let i = Number(input[0]); i <= Number(input[1]); i++) {
        if (i % 9 === 0) {
            numbers.push(i);
        }
    }
    console.log(`The sum: ${numbers.reduce((a, b) => a + b, 0)}`);
    numbers.forEach((n) => console.log(n));
}

module.exports = numbersDivisibleBy9;
