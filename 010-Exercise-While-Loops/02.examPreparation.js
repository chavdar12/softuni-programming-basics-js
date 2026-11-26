function examPreparation(input) {
    const allowedPoor = Number(input[0]);
    let poor = 0;
    let sum = 0;
    let count = 0;
    let lastProblem = '';
    let i = 1;
    while (input[i] !== 'Enough') {
        lastProblem = input[i];
        const grade = Number(input[i + 1]);
        i += 2;
        sum += grade;
        count++;
        if (grade <= 4 && ++poor === allowedPoor) {
            console.log(`You need a break, ${poor} poor grades.`);
            return;
        }
    }
    console.log(`Average score: ${(sum / count).toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${lastProblem}`);
}

module.exports = examPreparation;
