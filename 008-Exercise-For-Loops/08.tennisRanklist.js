function tennisRanklist(input) {
    const tournaments = Number(input[0]);
    const start = Number(input[1]);
    const points = { W: 2000, F: 1200, SF: 720 };
    let earned = 0;
    let wins = 0;
    for (let i = 2; i < tournaments + 2; i++) {
        earned += points[input[i]];
        if (input[i] === 'W') {
            wins++;
        }
    }
    console.log(`Final points: ${start + earned}`);
    console.log(`Average points: ${Math.floor(earned / tournaments)}`);
    console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}

module.exports = tennisRanklist;
