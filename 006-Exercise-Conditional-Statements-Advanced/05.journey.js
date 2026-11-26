function journey(input) {
    const budget = Number(input[0]);
    const summer = input[1] === 'summer';
    let destination = 'Europe';
    let type = 'Hotel';
    let share = 0.9;
    if (budget <= 100) {
        destination = 'Bulgaria';
        share = summer ? 0.3 : 0.7;
    } else if (budget <= 1000) {
        destination = 'Balkans';
        share = summer ? 0.4 : 0.8;
    }
    if (destination !== 'Europe' && summer) {
        type = 'Camp';
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${(budget * share).toFixed(2)}`);
}

module.exports = journey;
