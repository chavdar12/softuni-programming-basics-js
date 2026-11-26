function cinema(input) {
    const prices = { Premiere: 12, Normal: 7.5, Discount: 5 };
    const income = prices[input[0]] * Number(input[1]) * Number(input[2]);
    console.log(`${income.toFixed(2)} leva`);
}

module.exports = cinema;
