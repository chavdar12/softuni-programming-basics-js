const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const dayOfWeek = require('./01.dayOfWeek');
const weekendOrWorkingDay = require('./02.weekendOrWorkingDay');
const animalType = require('./03.animalType');
const personalTitles = require('./04.personalTitles');
const smallShop = require('./05.smallShop');
const numberInRange = require('./06.numberInRange');
const workingHours = require('./07.workingHours');
const cinemaTicket = require('./08.cinemaTicket');
const fruitOrVegetable = require('./09.fruitOrVegetable');
const invalidNumber = require('./10.invalidNumber');
const fruitShop = require('./11.fruitShop');
const tradeCommissions = require('./12.tradeCommissions');

describe('Conditional Statements Advanced - Lab', () => {
    it('01. Day of Week', () => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        days.forEach((day, i) =>
            expect(captureLog(() => dayOfWeek([String(i + 1)]))).to.deep.equal([day]),
        );
        expect(captureLog(() => dayOfWeek(['-1']))).to.deep.equal(['Error']);
    });

    it('02. Weekend or Working Day', () => {
        expect(captureLog(() => weekendOrWorkingDay(['Monday']))).to.deep.equal(['Working day']);
        expect(captureLog(() => weekendOrWorkingDay(['Sunday']))).to.deep.equal(['Weekend']);
        expect(captureLog(() => weekendOrWorkingDay(['April']))).to.deep.equal(['Error']);
    });

    it('03. Animal Type', () => {
        expect(captureLog(() => animalType(['dog']))).to.deep.equal(['mammal']);
        expect(captureLog(() => animalType(['snake']))).to.deep.equal(['reptile']);
        expect(captureLog(() => animalType(['cat']))).to.deep.equal(['unknown']);
    });

    it('04. Personal Titles', () => {
        expect(captureLog(() => personalTitles(['12', 'f']))).to.deep.equal(['Miss']);
        expect(captureLog(() => personalTitles(['17', 'm']))).to.deep.equal(['Mr.']);
        expect(captureLog(() => personalTitles(['25', 'f']))).to.deep.equal(['Ms.']);
        expect(captureLog(() => personalTitles(['13.5', 'm']))).to.deep.equal(['Master']);
    });

    it('05. Small Shop', () => {
        const printed = (input) => Number(captureLog(() => smallShop(input))[0]);
        expect(printed(['coffee', 'Varna', '2'])).to.be.closeTo(0.9, 1e-9);
        expect(printed(['peanuts', 'Plovdiv', '1'])).to.be.closeTo(1.5, 1e-9);
        // The PDF sample says 3.6, but its own price table (beer in Sofia = 1.20) gives 2.4.
        expect(printed(['beer', 'Sofia', '2'])).to.be.closeTo(2.4, 1e-9);
        expect(printed(['water', 'Plovdiv', '2'])).to.be.closeTo(1.4, 1e-9);
        expect(printed(['sweets', 'Sofia', '2.23'])).to.be.closeTo(3.2335, 1e-9);
    });

    it('06. Number in Range', () => {
        expect(captureLog(() => numberInRange(['-25']))).to.deep.equal(['Yes']);
        expect(captureLog(() => numberInRange(['0']))).to.deep.equal(['No']);
        expect(captureLog(() => numberInRange(['25']))).to.deep.equal(['Yes']);
    });

    it('07. Working Hours', () => {
        expect(captureLog(() => workingHours(['11', 'Monday']))).to.deep.equal(['open']);
        expect(captureLog(() => workingHours(['19', 'Friday']))).to.deep.equal(['closed']);
        expect(captureLog(() => workingHours(['11', 'Sunday']))).to.deep.equal(['closed']);
    });

    it('08. Cinema Ticket', () => {
        expect(captureLog(() => cinemaTicket(['Monday']))).to.deep.equal(['12']);
        expect(captureLog(() => cinemaTicket(['Friday']))).to.deep.equal(['12']);
        expect(captureLog(() => cinemaTicket(['Sunday']))).to.deep.equal(['16']);
    });

    it('09. Fruit or Vegetable', () => {
        expect(captureLog(() => fruitOrVegetable(['banana']))).to.deep.equal(['fruit']);
        expect(captureLog(() => fruitOrVegetable(['apple']))).to.deep.equal(['fruit']);
        expect(captureLog(() => fruitOrVegetable(['tomato']))).to.deep.equal(['vegetable']);
        expect(captureLog(() => fruitOrVegetable(['water']))).to.deep.equal(['unknown']);
    });

    it('10. Invalid Number', () => {
        ['75', '220', '-1'].forEach((n) =>
            expect(captureLog(() => invalidNumber([n]))).to.deep.equal(['invalid']),
        );
        ['150', '199', '100', '200', '0'].forEach((n) =>
            expect(captureLog(() => invalidNumber([n]))).to.deep.equal([]),
        );
    });

    it('11. Fruit Shop', () => {
        expect(captureLog(() => fruitShop(['apple', 'Tuesday', '2']))).to.deep.equal(['2.40']);
        expect(captureLog(() => fruitShop(['orange', 'Sunday', '3']))).to.deep.equal(['2.70']);
        expect(captureLog(() => fruitShop(['kiwi', 'Monday', '2.5']))).to.deep.equal(['6.75']);
        expect(captureLog(() => fruitShop(['grapes', 'Saturday', '0.5']))).to.deep.equal(['2.10']);
        expect(captureLog(() => fruitShop(['tomato', 'Monday', '0.5']))).to.deep.equal(['error']);
        expect(captureLog(() => fruitShop(['apple', 'Holiday', '1']))).to.deep.equal(['error']);
    });

    it('12. Trade Commissions', () => {
        expect(captureLog(() => tradeCommissions(['Sofia', '1500']))).to.deep.equal(['120.00']);
        expect(captureLog(() => tradeCommissions(['Plovdiv', '499.99']))).to.deep.equal(['27.50']);
        expect(captureLog(() => tradeCommissions(['Varna', '3874.50']))).to.deep.equal(['387.45']);
        expect(captureLog(() => tradeCommissions(['Kaspichan', '-50']))).to.deep.equal(['error']);
        expect(captureLog(() => tradeCommissions(['Sofia', '-1']))).to.deep.equal(['error']);
    });
});
