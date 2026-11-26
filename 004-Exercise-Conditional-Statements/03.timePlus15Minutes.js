function timePlus15Minutes(input) {
    const total = Number(input[0]) * 60 + Number(input[1]) + 15;
    const hours = Math.floor(total / 60) % 24;
    console.log(`${hours}:${String(total % 60).padStart(2, '0')}`);
}

module.exports = timePlus15Minutes;
