function cinemaTicket(input) {
    const prices = {
        Monday: 12,
        Tuesday: 12,
        Wednesday: 14,
        Thursday: 14,
        Friday: 12,
        Saturday: 16,
        Sunday: 16,
    };
    console.log(prices[input[0]]);
}

module.exports = cinemaTicket;
