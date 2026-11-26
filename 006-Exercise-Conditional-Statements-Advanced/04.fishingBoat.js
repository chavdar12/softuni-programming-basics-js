function fishingBoat(input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);
    const rent = { Spring: 3000, Summer: 4200, Autumn: 4200, Winter: 2600 };
    let price = rent[season];
    if (fishermen <= 6) {
        price *= 0.9;
    } else if (fishermen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }
    if (fishermen % 2 === 0 && season !== 'Autumn') {
        price *= 0.95;
    }
    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}

module.exports = fishingBoat;
