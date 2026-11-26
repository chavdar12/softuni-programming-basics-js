function movieProfit(input) {
    const name = input[0];
    const [days, tickets, price, cinemaPercent] = input.slice(1).map(Number);
    const income = days * tickets * price;
    const profit = income - (income * cinemaPercent) / 100;
    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`);
}

module.exports = movieProfit;
