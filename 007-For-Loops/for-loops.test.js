const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const numbers1To100 = require('./01.numbers1To100');
const numbersNTo1 = require('./02.numbersNTo1');
const numbers1ToNWithStep3 = require('./03.numbers1ToNWithStep3');
const evenPowersOf2 = require('./04.evenPowersOf2');
const characterSequence = require('./05.characterSequence');
const vowelsSum = require('./06.vowelsSum');
const sumOfDigits = require('./07.sumOfDigits');
const numbersDivisibleBy9 = require('./08.numbersDivisibleBy9');

const lines = (...values) => values.map(String);

describe('For Loops - Lab', () => {
    it('01. Numbers 1 to 100', () => {
        expect(captureLog(() => numbers1To100())).to.deep.equal(
            Array.from({ length: 100 }, (_, i) => String(i + 1)),
        );
    });

    it('02. Numbers N to 1', () => {
        expect(captureLog(() => numbersNTo1(['2']))).to.deep.equal(lines(2, 1));
        expect(captureLog(() => numbersNTo1(['5']))).to.deep.equal(lines(5, 4, 3, 2, 1));
    });

    it('03. Numbers 1 to N with Step 3', () => {
        expect(captureLog(() => numbers1ToNWithStep3(['10']))).to.deep.equal(lines(1, 4, 7, 10));
        expect(captureLog(() => numbers1ToNWithStep3(['7']))).to.deep.equal(lines(1, 4, 7));
        expect(captureLog(() => numbers1ToNWithStep3(['15']))).to.deep.equal(
            lines(1, 4, 7, 10, 13),
        );
    });

    it('04. Even Powers of 2', () => {
        expect(captureLog(() => evenPowersOf2(['3']))).to.deep.equal(lines(1, 4));
        expect(captureLog(() => evenPowersOf2(['4']))).to.deep.equal(lines(1, 4, 16));
        expect(captureLog(() => evenPowersOf2(['7']))).to.deep.equal(lines(1, 4, 16, 64));
    });

    it('05. Character Sequence', () => {
        expect(captureLog(() => characterSequence(['softuni']))).to.deep.equal([...'softuni']);
        expect(captureLog(() => characterSequence(['ice cream']))).to.deep.equal([...'ice cream']);
    });

    it('06. Vowels Sum', () => {
        expect(captureLog(() => vowelsSum(['hello']))).to.deep.equal(['6']);
        expect(captureLog(() => vowelsSum(['hi']))).to.deep.equal(['3']);
        expect(captureLog(() => vowelsSum(['bamboo']))).to.deep.equal(['9']);
        expect(captureLog(() => vowelsSum(['beer']))).to.deep.equal(['4']);
    });

    it('07. Sum of Digits', () => {
        expect(captureLog(() => sumOfDigits(['1234']))).to.deep.equal([
            'The sum of the digits is:10',
        ]);
        expect(captureLog(() => sumOfDigits(['564891']))).to.deep.equal([
            'The sum of the digits is:33',
        ]);
    });

    it('08. Numbers Divisible by 9', () => {
        expect(captureLog(() => numbersDivisibleBy9(['100', '200']))).to.deep.equal([
            'The sum: 1683',
            ...lines(108, 117, 126, 135, 144, 153, 162, 171, 180, 189, 198),
        ]);
    });
});
