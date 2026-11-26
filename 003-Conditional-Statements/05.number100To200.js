function number100To200(input) {
    const n = Number(input[0]);
    if (n < 100) {
        console.log('Less than 100');
    } else if (n <= 200) {
        console.log('Between 100 and 200');
    } else {
        console.log('Greater than 200');
    }
}

module.exports = number100To200;
