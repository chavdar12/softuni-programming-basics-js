function vetParking(input) {
    const days = Number(input[0]);
    const hours = Number(input[1]);
    let total = 0;
    for (let day = 1; day <= days; day++) {
        let daySum = 0;
        for (let hour = 1; hour <= hours; hour++) {
            if (day % 2 === 0 && hour % 2 === 1) {
                daySum += 2.5;
            } else if (day % 2 === 1 && hour % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum += 1;
            }
        }
        console.log(`Day: ${day} - ${daySum.toFixed(2)} leva`);
        total += daySum;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

module.exports = vetParking;
