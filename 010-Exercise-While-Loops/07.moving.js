function moving(input) {
    let space = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let i = 3;
    while (input[i] !== 'Done' && i < input.length) {
        space -= Number(input[i++]);
        if (space < 0) {
            console.log(`No more free space! You need ${-space} Cubic meters more.`);
            return;
        }
    }
    console.log(`${space} Cubic meters left.`);
}

module.exports = moving;
