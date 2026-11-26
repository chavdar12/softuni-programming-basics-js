function equalSumsEvenOddPosition(input) {
    const [start, end] = input.map(Number);
    const result = [];
    for (let n = start; n <= end; n++) {
        let even = 0;
        let odd = 0;
        const digits = String(n);
        for (let i = 0; i < digits.length; i++) {
            if (i % 2 === 0) {
                even += Number(digits[i]);
            } else {
                odd += Number(digits[i]);
            }
        }
        if (even === odd) {
            result.push(n);
        }
    }
    if (result.length) {
        console.log(result.join(' '));
    }
}

module.exports = equalSumsEvenOddPosition;
