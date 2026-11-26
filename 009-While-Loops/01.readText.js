function readText(input) {
    let i = 0;
    while (input[i] !== 'Stop') {
        console.log(input[i++]);
    }
}

module.exports = readText;
