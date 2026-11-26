function operationsBetweenNumbers(input) {
    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    const operator = input[2];
    if ((operator === '/' || operator === '%') && n2 === 0) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator === '/') {
        console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`);
    } else if (operator === '%') {
        console.log(`${n1} % ${n2} = ${n1 % n2}`);
    } else {
        const result = operator === '+' ? n1 + n2 : operator === '-' ? n1 - n2 : n1 * n2;
        console.log(`${n1} ${operator} ${n2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`);
    }
}

module.exports = operationsBetweenNumbers;
