function histogram(input) {
    const n = Number(input[0]);
    const counts = [0, 0, 0, 0, 0];
    for (let i = 1; i <= n; i++) {
        counts[Math.min(Math.floor(Number(input[i]) / 200), 4)]++;
    }
    counts.forEach((count) => console.log(`${((count / n) * 100).toFixed(2)}%`));
}

module.exports = histogram;
