function accountBalance(input) {
    let total = 0;
    let i = 0;
    while (input[i] !== 'NoMoreMoney') {
        const amount = Number(input[i++]);
        if (amount < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${amount.toFixed(2)}`);
        total += amount;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

module.exports = accountBalance;
