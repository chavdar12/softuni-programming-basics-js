function vacationBooksList(input) {
    const [pages, pagesPerHour, days] = input.map(Number);
    console.log(pages / pagesPerHour / days);
}

module.exports = vacationBooksList;
