function yardGreening(input) {
    const price = Number(input[0]) * 7.61;
    const discount = price * 0.18;
    console.log(`The final price is: ${(price - discount).toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

module.exports = yardGreening;
