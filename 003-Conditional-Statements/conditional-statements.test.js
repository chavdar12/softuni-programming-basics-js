const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const excellentGrade = require('./01.excellentGrade');
const greaterNumber = require('./02.greaterNumber');
const evenOrOdd = require('./03.evenOrOdd');
const passwordGuess = require('./04.passwordGuess');
const number100To200 = require('./05.number100To200');
const speedInfo = require('./06.speedInfo');
const areaOfFigures = require('./07.areaOfFigures');

describe('Conditional Statements - Lab', () => {
    it('01. Excellent Grade', () => {
        expect(captureLog(() => excellentGrade(['6']))).to.deep.equal(['Excellent!']);
        expect(captureLog(() => excellentGrade(['5']))).to.deep.equal([]);
        expect(captureLog(() => excellentGrade(['5.50']))).to.deep.equal(['Excellent!']);
        expect(captureLog(() => excellentGrade(['5.49']))).to.deep.equal([]);
    });

    it('02. Greater Number', () => {
        expect(captureLog(() => greaterNumber(['5', '3']))).to.deep.equal(['5']);
        expect(captureLog(() => greaterNumber(['3', '5']))).to.deep.equal(['5']);
        expect(captureLog(() => greaterNumber(['10', '10']))).to.deep.equal(['10']);
        expect(captureLog(() => greaterNumber(['-5', '5']))).to.deep.equal(['5']);
    });

    it('03. Even or Odd', () => {
        expect(captureLog(() => evenOrOdd(['2']))).to.deep.equal(['even']);
        expect(captureLog(() => evenOrOdd(['3']))).to.deep.equal(['odd']);
        expect(captureLog(() => evenOrOdd(['25']))).to.deep.equal(['odd']);
        expect(captureLog(() => evenOrOdd(['1024']))).to.deep.equal(['even']);
    });

    it('04. Password Guess', () => {
        expect(captureLog(() => passwordGuess(['qwerty']))).to.deep.equal(['Wrong password!']);
        expect(captureLog(() => passwordGuess(['s3cr3t!P@ssw0rd']))).to.deep.equal(['Welcome']);
        expect(captureLog(() => passwordGuess(['s3cr3t!p@ss']))).to.deep.equal(['Wrong password!']);
    });

    it('05. Number 100 to 200', () => {
        expect(captureLog(() => number100To200(['95']))).to.deep.equal(['Less than 100']);
        expect(captureLog(() => number100To200(['120']))).to.deep.equal(['Between 100 and 200']);
        expect(captureLog(() => number100To200(['210']))).to.deep.equal(['Greater than 200']);
    });

    it('06. Speed Info', () => {
        expect(captureLog(() => speedInfo(['8']))).to.deep.equal(['slow']);
        expect(captureLog(() => speedInfo(['49.5']))).to.deep.equal(['average']);
        expect(captureLog(() => speedInfo(['126']))).to.deep.equal(['fast']);
        expect(captureLog(() => speedInfo(['160']))).to.deep.equal(['ultra fast']);
        expect(captureLog(() => speedInfo(['3500']))).to.deep.equal(['extremely fast']);
    });

    it('07. Area of Figures', () => {
        expect(captureLog(() => areaOfFigures(['square', '5']))).to.deep.equal(['25.000']);
        expect(captureLog(() => areaOfFigures(['rectangle', '7', '2.5']))).to.deep.equal([
            '17.500',
        ]);
        expect(captureLog(() => areaOfFigures(['circle', '6']))).to.deep.equal(['113.097']);
        expect(captureLog(() => areaOfFigures(['triangle', '4.5', '20']))).to.deep.equal([
            '45.000',
        ]);
    });
});
