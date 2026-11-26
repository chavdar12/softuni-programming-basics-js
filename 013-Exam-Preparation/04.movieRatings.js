function movieRatings(input) {
    const count = Number(input[0]);
    let best = { name: '', rating: -Infinity };
    let worst = { name: '', rating: Infinity };
    let sum = 0;
    for (let i = 0; i < count; i++) {
        const name = input[1 + i * 2];
        const rating = Number(input[2 + i * 2]);
        sum += rating;
        if (rating > best.rating) {
            best = { name, rating };
        }
        if (rating < worst.rating) {
            worst = { name, rating };
        }
    }
    console.log(`${best.name} is with highest rating: ${best.rating.toFixed(1)}`);
    console.log(`${worst.name} is with lowest rating: ${worst.rating.toFixed(1)}`);
    console.log(`Average rating: ${(sum / count).toFixed(1)}`);
}

module.exports = movieRatings;
