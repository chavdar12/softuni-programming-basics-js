function suppliesForSchool(input) {
    const [pens, markers, detergent, discount] = input.map(Number);
    const total = pens * 5.8 + markers * 7.2 + detergent * 1.2;
    console.log(total - (total * discount) / 100);
}

module.exports = suppliesForSchool;
