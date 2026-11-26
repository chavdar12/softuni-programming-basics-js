function trekkingMania(input) {
    const groups = Number(input[0]);
    // Musala, Monblan, Kilimanjaro, K2, Everest
    const climbers = [0, 0, 0, 0, 0];
    let total = 0;
    for (let i = 1; i <= groups; i++) {
        const size = Number(input[i]);
        total += size;
        if (size <= 5) {
            climbers[0] += size;
        } else if (size <= 12) {
            climbers[1] += size;
        } else if (size <= 25) {
            climbers[2] += size;
        } else if (size <= 40) {
            climbers[3] += size;
        } else {
            climbers[4] += size;
        }
    }
    climbers.forEach((count) => console.log(`${((count / total) * 100).toFixed(2)}%`));
}

module.exports = trekkingMania;
