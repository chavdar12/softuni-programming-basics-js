const WEEKDAY = {
    banana: 2.5,
    apple: 1.2,
    orange: 0.85,
    grapefruit: 1.45,
    kiwi: 2.7,
    pineapple: 5.5,
    grapes: 3.85,
};
const WEEKEND = {
    banana: 2.7,
    apple: 1.25,
    orange: 0.9,
    grapefruit: 1.6,
    kiwi: 3,
    pineapple: 5.6,
    grapes: 4.2,
};

function fruitShop(input) {
    const [fruit, day, quantity] = input;
    let prices;
    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day)) {
        prices = WEEKDAY;
    } else if (['Saturday', 'Sunday'].includes(day)) {
        prices = WEEKEND;
    }
    const price = prices?.[fruit];
    console.log(price === undefined ? 'error' : (price * Number(quantity)).toFixed(2));
}

module.exports = fruitShop;
