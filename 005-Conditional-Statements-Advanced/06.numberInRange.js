function numberInRange(input) {
    const n = Number(input[0]);
    console.log(n >= -100 && n <= 100 && n !== 0 ? 'Yes' : 'No');
}

module.exports = numberInRange;
