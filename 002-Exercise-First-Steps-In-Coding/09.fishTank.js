function fishTank(input) {
    const [length, width, height, percent] = input.map(Number);
    const liters = (length * width * height) / 1000;
    console.log(liters * (1 - percent / 100));
}

module.exports = fishTank;
