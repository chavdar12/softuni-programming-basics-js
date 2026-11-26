function godzillaVsKong(input) {
    const [budget, extras, clothingPrice] = input.map(Number);
    let clothing = extras * clothingPrice;
    if (extras > 150) {
        clothing *= 0.9;
    }
    const diff = budget - budget * 0.1 - clothing;
    if (diff >= 0) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    } else {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(-diff).toFixed(2)} leva more.`);
    }
}

module.exports = godzillaVsKong;
