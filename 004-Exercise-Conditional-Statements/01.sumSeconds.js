function sumSeconds(input) {
    const total = input.map(Number).reduce((a, b) => a + b, 0);
    const seconds = String(total % 60).padStart(2, '0');
    console.log(`${Math.floor(total / 60)}:${seconds}`);
}

module.exports = sumSeconds;
