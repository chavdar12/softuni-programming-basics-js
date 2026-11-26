function cinemaTickets(input) {
    const tickets = { student: 0, standard: 0, kid: 0 };
    let total = 0;
    let i = 0;
    while (input[i] !== 'Finish') {
        const movie = input[i];
        const seats = Number(input[i + 1]);
        i += 2;
        let sold = 0;
        while (sold < seats && input[i] !== 'End' && input[i] !== 'Finish') {
            tickets[input[i++]]++;
            sold++;
        }
        if (input[i] === 'End') {
            i++;
        }
        total += sold;
        console.log(`${movie} - ${((sold / seats) * 100).toFixed(2)}% full.`);
    }
    const percent = (count) => ((count / total) * 100).toFixed(2);
    console.log(`Total tickets: ${total}`);
    console.log(`${percent(tickets.student)}% student tickets.`);
    console.log(`${percent(tickets.standard)}% standard tickets.`);
    console.log(`${percent(tickets.kid)}% kids tickets.`);
}

module.exports = cinemaTickets;
