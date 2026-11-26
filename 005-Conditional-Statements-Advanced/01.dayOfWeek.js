function dayOfWeek(input) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    console.log(days[Number(input[0]) - 1] ?? 'Error');
}

module.exports = dayOfWeek;
