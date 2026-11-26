function coins(input) {
    // Work in stotinki to dodge floating point errors like 0.56 * 100 = 56.00000000000001.
    let change = Math.round(Number(input[0]) * 100);
    let count = 0;
    for (const coin of [200, 100, 50, 20, 10, 5, 2, 1]) {
        while (change >= coin) {
            change -= coin;
            count++;
        }
    }
    console.log(count);
}

module.exports = coins;
