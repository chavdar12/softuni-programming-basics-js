function sumNumbers(input) {
    const target = Number(input[0]);
    let sum = 0;
    let i = 1;
    while (sum < target) {
        sum += Number(input[i++]);
    }
    console.log(sum);
}

module.exports = sumNumbers;
