function toyShop(input) {
    const [trip, puzzles, dolls, bears, minions, trucks] = input.map(Number);
    const count = puzzles + dolls + bears + minions + trucks;
    let sum = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    if (count >= 50) {
        sum *= 0.75;
    }
    const profit = sum * 0.9;
    if (profit >= trip) {
        console.log(`Yes! ${(profit - trip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(trip - profit).toFixed(2)} lv needed.`);
    }
}

module.exports = toyShop;
