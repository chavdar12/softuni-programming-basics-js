function repainting(input) {
    const [nylon, paint, thinner, hours] = input.map(Number);
    const materials = (nylon + 2) * 1.5 + paint * 1.1 * 14.5 + thinner * 5 + 0.4;
    console.log(materials + materials * 0.3 * hours);
}

module.exports = repainting;
