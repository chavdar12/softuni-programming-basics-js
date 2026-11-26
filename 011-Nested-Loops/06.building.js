function building(input) {
    const floors = Number(input[0]);
    const rooms = Number(input[1]);
    for (let floor = floors; floor >= 1; floor--) {
        const type = floor === floors ? 'L' : floor % 2 === 0 ? 'O' : 'A';
        const line = [];
        for (let room = 0; room < rooms; room++) {
            line.push(`${type}${floor}${room}`);
        }
        console.log(line.join(' '));
    }
}

module.exports = building;
