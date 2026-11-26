function personalTitles(input) {
    const adult = Number(input[0]) >= 16;
    if (input[1] === 'm') {
        console.log(adult ? 'Mr.' : 'Master');
    } else {
        console.log(adult ? 'Ms.' : 'Miss');
    }
}

module.exports = personalTitles;
