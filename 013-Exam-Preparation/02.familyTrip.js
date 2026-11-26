function familyTrip(input) {
    const [budget, nights, nightPrice, extraPercent] = input.map(Number);
    const price = nights > 7 ? nightPrice * 0.95 : nightPrice;
    const cost = nights * price + (budget * extraPercent) / 100;
    if (cost <= budget) {
        console.log(`Ivanovi will be left with ${(budget - cost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(cost - budget).toFixed(2)} leva needed.`);
    }
}

module.exports = familyTrip;
