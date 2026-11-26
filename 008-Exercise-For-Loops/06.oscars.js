function oscars(input) {
    const actor = input[0];
    let points = Number(input[1]);
    const judges = Number(input[2]);
    for (let i = 0; i < judges; i++) {
        const name = input[3 + i * 2];
        points += (name.length * Number(input[4 + i * 2])) / 2;
        if (points > 1250.5) {
            console.log(
                `Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`,
            );
            return;
        }
    }
    console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);
}

module.exports = oscars;
