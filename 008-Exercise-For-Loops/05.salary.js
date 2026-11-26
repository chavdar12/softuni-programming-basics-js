function salary(input) {
    const tabs = Number(input[0]);
    let remaining = Number(input[1]);
    const fines = { Facebook: 150, Instagram: 100, Reddit: 50 };
    for (let i = 2; i < tabs + 2; i++) {
        remaining -= fines[input[i]] ?? 0;
        if (remaining <= 0) {
            console.log('You have lost your salary.');
            return;
        }
    }
    console.log(Math.trunc(remaining));
}

module.exports = salary;
