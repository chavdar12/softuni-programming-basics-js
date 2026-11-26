function skiTrip(input) {
    const nights = Number(input[0]) - 1;
    const room = input[1];
    const bracket = nights < 10 ? 0 : nights <= 15 ? 1 : 2;
    const rooms = {
        'room for one person': { price: 18, discounts: [0, 0, 0] },
        apartment: { price: 25, discounts: [0.3, 0.35, 0.5] },
        'president apartment': { price: 35, discounts: [0.1, 0.15, 0.2] },
    };
    const { price, discounts } = rooms[room];
    let total = nights * price * (1 - discounts[bracket]);
    total *= input[2] === 'positive' ? 1.25 : 0.9;
    console.log(total.toFixed(2));
}

module.exports = skiTrip;
