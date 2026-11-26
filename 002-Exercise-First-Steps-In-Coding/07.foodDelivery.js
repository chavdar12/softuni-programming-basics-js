function foodDelivery(input) {
    const [chicken, fish, vegetarian] = input.map(Number);
    const menus = chicken * 10.35 + fish * 12.4 + vegetarian * 8.15;
    console.log(menus * 1.2 + 2.5);
}

module.exports = foodDelivery;
