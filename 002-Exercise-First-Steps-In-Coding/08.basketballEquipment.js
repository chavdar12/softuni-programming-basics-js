function basketballEquipment(input) {
    const fee = Number(input[0]);
    const sneakers = fee * 0.6;
    const outfit = sneakers * 0.8;
    const ball = outfit / 4;
    const accessories = ball / 5;
    console.log(fee + sneakers + outfit + ball + accessories);
}

module.exports = basketballEquipment;
