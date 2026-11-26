const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const helloSoftUni = require('./01.helloSoftUni');
const nums1To10 = require('./02.nums1To10');
const squareArea = require('./03.squareArea');
const inchesToCentimeters = require('./04.inchesToCentimeters');
const greetingByName = require('./05.greetingByName');
const concatenateData = require('./06.concatenateData');
const projectsCreation = require('./07.projectsCreation');
const petShop = require('./08.petShop');
const yardGreening = require('./09.yardGreening');

describe('First Steps in Coding - Lab', () => {
    it('01. Hello SoftUni', () => {
        expect(captureLog(() => helloSoftUni())).to.deep.equal(['Hello SoftUni']);
    });

    it('02. Nums 1 to 10', () => {
        expect(captureLog(() => nums1To10())).to.deep.equal([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
        ]);
    });

    it('03. Square Area', () => {
        expect(captureLog(() => squareArea(['5']))).to.deep.equal(['25']);
    });

    it('04. Inches to Centimeters', () => {
        expect(captureLog(() => inchesToCentimeters(['5']))).to.deep.equal(['12.7']);
        expect(captureLog(() => inchesToCentimeters(['7']))).to.deep.equal(['17.78']);
    });

    it('05. Greeting by Name', () => {
        expect(captureLog(() => greetingByName(['Peter']))).to.deep.equal(['Hello, Peter!']);
    });

    it('06. Concatenate Data', () => {
        expect(
            captureLog(() => concatenateData(['Maria', 'Ivanova', '20', 'Sofia'])),
        ).to.deep.equal(['You are Maria Ivanova, a 20-years old person from Sofia.']);
    });

    it('07. Projects Creation', () => {
        expect(captureLog(() => projectsCreation(['George ', '4 ']))).to.deep.equal([
            'The architect George will need 12 hours to complete 4 project/s.',
        ]);
        expect(captureLog(() => projectsCreation(['Sanya ', '9 ']))).to.deep.equal([
            'The architect Sanya will need 27 hours to complete 9 project/s.',
        ]);
    });

    it('08. Pet Shop', () => {
        expect(captureLog(() => petShop(['5 ', '4 ']))).to.deep.equal(['28.5 lv.']);
        expect(captureLog(() => petShop(['13', '9']))).to.deep.equal(['68.5 lv.']);
    });

    it('09. Yard Greening', () => {
        expect(captureLog(() => yardGreening(['550']))).to.deep.equal([
            'The final price is: 3432.11 lv.',
            'The discount is: 753.39 lv.',
        ]);
        expect(captureLog(() => yardGreening(['150']))).to.deep.equal([
            'The final price is: 936.03 lv.',
            'The discount is: 205.47 lv.',
        ]);
    });
});
