function touristShop(input) {
    let budget = Number(input[0]);
    let bought = 0;
    let spent = 0;
    let i = 1;
    while (input[i] !== 'Stop') {
        let price = Number(input[i + 1]);
        i += 2;
        if ((bought + 1) % 3 === 0) {
            price /= 2;
        }
        if (price > budget) {
            console.log("You don't have enough money!");
            console.log(`You need ${(price - budget).toFixed(2)} leva!`);
            return;
        }
        budget -= price;
        spent += price;
        bought++;
    }
    console.log(`You bought ${bought} products for ${spent.toFixed(2)} leva.`);
}

module.exports = touristShop;
