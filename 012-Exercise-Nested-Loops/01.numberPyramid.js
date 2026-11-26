function numberPyramid(input) {
    const n = Number(input[0]);
    let current = 1;
    for (let row = 1; current <= n; row++) {
        const line = [];
        for (let col = 0; col < row && current <= n; col++) {
            line.push(current++);
        }
        console.log(line.join(' '));
    }
}

module.exports = numberPyramid;
