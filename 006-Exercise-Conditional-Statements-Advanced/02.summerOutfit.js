function summerOutfit(input) {
    const degrees = Number(input[0]);
    const time = input[1];
    let outfit = 'Shirt';
    let shoes = 'Moccasins';
    if (degrees <= 18) {
        if (time === 'Morning') {
            [outfit, shoes] = ['Sweatshirt', 'Sneakers'];
        }
    } else if (degrees <= 24) {
        if (time === 'Afternoon') {
            [outfit, shoes] = ['T-Shirt', 'Sandals'];
        }
    } else if (time === 'Morning') {
        [outfit, shoes] = ['T-Shirt', 'Sandals'];
    } else if (time === 'Afternoon') {
        [outfit, shoes] = ['Swim Suit', 'Barefoot'];
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

module.exports = summerOutfit;
