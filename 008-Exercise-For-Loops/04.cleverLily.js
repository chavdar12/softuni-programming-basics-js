function cleverLily(input) {
    const age = Number(input[0]);
    const washingMachine = Number(input[1]);
    const toyPrice = Number(input[2]);
    let savings = 0;
    let gift = 10;
    for (let year = 1; year <= age; year++) {
        if (year % 2 === 0) {
            savings += gift - 1;
            gift += 10;
        } else {
            savings += toyPrice;
        }
    }
    if (savings >= washingMachine) {
        console.log(`Yes! ${(savings - washingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachine - savings).toFixed(2)}`);
    }
}

module.exports = cleverLily;
