function hotelRoom(input) {
    const month = input[0];
    const nights = Number(input[1]);
    let studio;
    let apartment;
    if (month === 'May' || month === 'October') {
        studio = 50 * (nights > 14 ? 0.7 : nights > 7 ? 0.95 : 1);
        apartment = 65;
    } else if (month === 'June' || month === 'September') {
        studio = 75.2 * (nights > 14 ? 0.8 : 1);
        apartment = 68.7;
    } else {
        studio = 76;
        apartment = 77;
    }
    if (nights > 14) {
        apartment *= 0.9;
    }
    console.log(`Apartment: ${(apartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`);
}

module.exports = hotelRoom;
