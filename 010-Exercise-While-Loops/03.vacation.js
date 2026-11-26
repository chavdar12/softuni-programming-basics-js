function vacation(input) {
    const needed = Number(input[0]);
    let money = Number(input[1]);
    let days = 0;
    let spendStreak = 0;
    let i = 2;
    while (money < needed) {
        const action = input[i];
        const amount = Number(input[i + 1]);
        i += 2;
        days++;
        if (action === 'spend') {
            money = Math.max(0, money - amount);
            if (++spendStreak === 5) {
                console.log("You can't save the money.");
                console.log(days);
                return;
            }
        } else {
            money += amount;
            spendStreak = 0;
        }
    }
    console.log(`You saved the money for ${days} days.`);
}

module.exports = vacation;
