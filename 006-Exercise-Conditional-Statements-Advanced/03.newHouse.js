function newHouse(input) {
    const flower = input[0];
    const count = Number(input[1]);
    const budget = Number(input[2]);
    let price;
    switch (flower) {
        case 'Roses':
            price = count * 5 * (count > 80 ? 0.9 : 1);
            break;
        case 'Dahlias':
            price = count * 3.8 * (count > 90 ? 0.85 : 1);
            break;
        case 'Tulips':
            price = count * 2.8 * (count > 80 ? 0.85 : 1);
            break;
        case 'Narcissus':
            price = count * 3 * (count < 120 ? 1.15 : 1);
            break;
        case 'Gladiolus':
            price = count * 2.5 * (count < 80 ? 1.2 : 1);
            break;
    }
    if (budget >= price) {
        console.log(
            `Hey, you have a great garden with ${count} ${flower} and ${(budget - price).toFixed(2)} leva left.`,
        );
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}

module.exports = newHouse;
