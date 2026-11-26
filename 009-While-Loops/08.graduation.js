function graduation(input) {
    const name = input[0];
    let grade = 1;
    let sum = 0;
    let fails = 0;
    let i = 1;
    while (grade <= 12) {
        const mark = Number(input[i++]);
        if (mark < 4) {
            fails++;
            if (fails > 1) {
                console.log(`${name} has been excluded at ${grade} grade`);
                return;
            }
            continue;
        }
        sum += mark;
        grade++;
    }
    console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
}

module.exports = graduation;
