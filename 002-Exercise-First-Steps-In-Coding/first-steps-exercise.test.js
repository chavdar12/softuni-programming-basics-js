const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const usdToBgn = require('./01.usdToBgn');
const radiansToDegrees = require('./02.radiansToDegrees');
const depositCalculator = require('./03.depositCalculator');
const vacationBooksList = require('./04.vacationBooksList');
const suppliesForSchool = require('./05.suppliesForSchool');
const repainting = require('./06.repainting');
const foodDelivery = require('./07.foodDelivery');
const basketballEquipment = require('./08.basketballEquipment');
const fishTank = require('./09.fishTank');

// The judge compares unrounded results with a tolerance, so do we.
const printed = (fn, input) => Number(captureLog(() => fn(input))[0]);

describe('First Steps in Coding - Exercise', () => {
    it('01. USD to BGN', () => {
        expect(printed(usdToBgn, ['22'])).to.be.closeTo(39.50078, 1e-9);
        expect(printed(usdToBgn, ['100'])).to.be.closeTo(179.549, 1e-9);
        expect(printed(usdToBgn, ['12.5'])).to.be.closeTo(22.443625, 1e-9);
    });

    it('02. Radians to Degrees', () => {
        expect(printed(radiansToDegrees, ['3.1416'])).to.be.closeTo(180.0004209182994, 1e-9);
        expect(printed(radiansToDegrees, ['6.2832'])).to.be.closeTo(360.0008418365988, 1e-9);
    });

    it('03. Deposit Calculator', () => {
        expect(printed(depositCalculator, ['200 ', '3 ', '5.7 '])).to.be.closeTo(202.85, 1e-9);
        expect(printed(depositCalculator, ['2350', '6 ', '7 '])).to.be.closeTo(2432.25, 1e-9);
    });

    it('04. Vacation Books List', () => {
        expect(printed(vacationBooksList, ['212 ', '20 ', '2 '])).to.be.closeTo(5.3, 1e-9);
        expect(printed(vacationBooksList, ['432 ', '15 ', '4 '])).to.be.closeTo(7.2, 1e-9);
    });

    it('05. Supplies for School', () => {
        expect(printed(suppliesForSchool, ['2 ', '3 ', '4 ', '25 '])).to.be.closeTo(28.5, 1e-9);
        expect(printed(suppliesForSchool, ['4 ', '2 ', '5 ', '13 '])).to.be.closeTo(37.932, 1e-9);
    });

    it('06. Repainting', () => {
        expect(printed(repainting, ['10 ', '11 ', '4 ', '8 '])).to.be.closeTo(727.09, 1e-9);
        expect(printed(repainting, ['5 ', '10 ', '10 ', '1 '])).to.be.closeTo(286.52, 1e-9);
    });

    it('07. Food Delivery', () => {
        expect(printed(foodDelivery, ['2 ', '4 ', '3 '])).to.be.closeTo(116.2, 1e-9);
        expect(printed(foodDelivery, ['9 ', '2 ', '6 '])).to.be.closeTo(202.72, 1e-9);
    });

    it('08. Basketball Equipment', () => {
        expect(printed(basketballEquipment, ['365 '])).to.be.closeTo(811.76, 1e-9);
        expect(printed(basketballEquipment, ['550 '])).to.be.closeTo(1223.2, 1e-9);
    });

    it('09. Fish Tank', () => {
        expect(printed(fishTank, ['85 ', '75 ', '47 ', '17 '])).to.be.closeTo(248.68875, 1e-9);
        expect(printed(fishTank, ['105 ', '77 ', '89 ', '18.5 '])).to.be.closeTo(586.445475, 1e-9);
    });
});
