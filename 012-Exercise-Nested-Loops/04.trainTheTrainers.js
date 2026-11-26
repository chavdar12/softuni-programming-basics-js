function trainTheTrainers(input) {
    const jury = Number(input[0]);
    let total = 0;
    let presentations = 0;
    let i = 1;
    while (input[i] !== 'Finish') {
        const name = input[i++];
        let sum = 0;
        for (let j = 0; j < jury; j++) {
            sum += Number(input[i++]);
        }
        console.log(`${name} - ${(sum / jury).toFixed(2)}.`);
        total += sum / jury;
        presentations++;
    }
    console.log(`Student's final assessment is ${(total / presentations).toFixed(2)}.`);
}

module.exports = trainTheTrainers;
