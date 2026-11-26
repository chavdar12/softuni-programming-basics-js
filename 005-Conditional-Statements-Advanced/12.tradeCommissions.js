// Rates per sales bracket: [0..500], (500..1000], (1000..10000], >10000
const RATES = {
    Sofia: [0.05, 0.07, 0.08, 0.12],
    Varna: [0.045, 0.075, 0.1, 0.13],
    Plovdiv: [0.055, 0.08, 0.12, 0.145],
};

function tradeCommissions(input) {
    const rates = RATES[input[0]];
    const sales = Number(input[1]);
    if (!rates || sales < 0) {
        console.log('error');
        return;
    }
    const bracket = sales <= 500 ? 0 : sales <= 1000 ? 1 : sales <= 10000 ? 2 : 3;
    console.log((sales * rates[bracket]).toFixed(2));
}

module.exports = tradeCommissions;
