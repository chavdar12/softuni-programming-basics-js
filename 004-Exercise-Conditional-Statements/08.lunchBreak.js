function lunchBreak(input) {
    const name = input[0];
    const episode = Number(input[1]);
    const rest = Number(input[2]);
    const left = rest - rest / 8 - rest / 4;
    if (left >= episode) {
        console.log(
            `You have enough time to watch ${name} and left with ${Math.ceil(left - episode)} minutes free time.`,
        );
    } else {
        console.log(
            `You don't have enough time to watch ${name}, you need ${Math.ceil(episode - left)} more minutes.`,
        );
    }
}

module.exports = lunchBreak;
