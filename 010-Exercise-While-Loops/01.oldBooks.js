function oldBooks(input) {
    const favourite = input[0];
    let checked = 0;
    let i = 1;
    while (input[i] !== 'No More Books') {
        if (input[i] === favourite) {
            console.log(`You checked ${checked} books and found it.`);
            return;
        }
        checked++;
        i++;
    }
    console.log('The book you search is not here!');
    console.log(`You checked ${checked} books.`);
}

module.exports = oldBooks;
