// [difficulty, performance] per country and apparatus
const SCORES = {
    Russia: { ribbon: [9.1, 9.4], hoop: [9.3, 9.8], rope: [9.6, 9.0] },
    Bulgaria: { ribbon: [9.6, 9.4], hoop: [9.55, 9.75], rope: [9.5, 9.4] },
    Italy: { ribbon: [9.2, 9.5], hoop: [9.45, 9.35], rope: [9.7, 9.15] },
};

function gymnastics(input) {
    const [country, apparatus] = input;
    const [difficulty, performance] = SCORES[country][apparatus];
    const score = difficulty + performance;
    console.log(`The team of ${country} get ${score.toFixed(3)} on ${apparatus}.`);
    console.log(`${(((20 - score) / 20) * 100).toFixed(2)}%`);
}

module.exports = gymnastics;
