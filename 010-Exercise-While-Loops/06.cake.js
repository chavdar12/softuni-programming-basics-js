function cake(input) {
    let pieces = Number(input[0]) * Number(input[1]);
    let i = 2;
    while (input[i] !== 'STOP' && i < input.length) {
        pieces -= Number(input[i++]);
        if (pieces < 0) {
            console.log(`No more cake left! You need ${-pieces} pieces more.`);
            return;
        }
    }
    console.log(`${pieces} pieces are left.`);
}

module.exports = cake;
