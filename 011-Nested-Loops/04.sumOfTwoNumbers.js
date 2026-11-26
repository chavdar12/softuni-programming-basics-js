function sumOfTwoNumbers(input) {
    const [start, end, magic] = input.map(Number);
    let count = 0;
    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            count++;
            if (a + b === magic) {
                console.log(`Combination N:${count} (${a} + ${b} = ${magic})`);
                return;
            }
        }
    }
    console.log(`${count} combinations - neither equals ${magic}`);
}

module.exports = sumOfTwoNumbers;
