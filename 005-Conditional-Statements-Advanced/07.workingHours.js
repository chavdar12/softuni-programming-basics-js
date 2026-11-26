function workingHours(input) {
    const hour = Number(input[0]);
    const isOpen = hour >= 10 && hour <= 18 && input[1] !== 'Sunday';
    console.log(isOpen ? 'open' : 'closed');
}

module.exports = workingHours;
