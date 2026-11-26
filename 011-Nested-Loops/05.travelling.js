function travelling(input) {
    let i = 0;
    while (input[i] !== 'End') {
        const destination = input[i];
        const budget = Number(input[i + 1]);
        i += 2;
        let saved = 0;
        while (saved < budget) {
            saved += Number(input[i++]);
        }
        console.log(`Going to ${destination}!`);
    }
}

module.exports = travelling;
