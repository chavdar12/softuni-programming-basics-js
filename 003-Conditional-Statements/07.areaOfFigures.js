function areaOfFigures(input) {
    const [figure, a, b] = [input[0], Number(input[1]), Number(input[2])];
    let area;
    if (figure === 'square') {
        area = a * a;
    } else if (figure === 'rectangle') {
        area = a * b;
    } else if (figure === 'circle') {
        area = Math.PI * a * a;
    } else if (figure === 'triangle') {
        area = (a * b) / 2;
    }
    console.log(area.toFixed(3));
}

module.exports = areaOfFigures;
