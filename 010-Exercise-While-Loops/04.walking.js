function walking(input) {
    const goal = 10000;
    let steps = 0;
    let i = 0;
    while (steps < goal && i < input.length) {
        if (input[i] === 'Going home') {
            steps += Number(input[i + 1]);
            break;
        }
        steps += Number(input[i++]);
    }
    if (steps >= goal) {
        console.log('Goal reached! Good job!');
        console.log(`${steps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - steps} more steps to reach goal.`);
    }
}

module.exports = walking;
