function depositCalculator(input) {
    const [deposit, months, rate] = input.map(Number);
    console.log(deposit + months * ((deposit * rate) / 100 / 12));
}

module.exports = depositCalculator;
