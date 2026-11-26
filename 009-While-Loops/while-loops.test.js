const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const readText = require('./01.readText');
const password = require('./02.password');
const sumNumbers = require('./03.sumNumbers');
const sequence2kPlus1 = require('./04.sequence2kPlus1');
const accountBalance = require('./05.accountBalance');
const maxNumber = require('./06.maxNumber');
const minNumber = require('./07.minNumber');
const graduation = require('./08.graduation');

describe('While Loops - Lab', () => {
    it('01. Read Text', () => {
        expect(
            captureLog(() =>
                readText([
                    'Nakov',
                    'SoftUni',
                    'Sofia',
                    'Bulgaria',
                    'SomeText',
                    'Stop',
                    'AfterStop',
                    'Europe',
                ]),
            ),
        ).to.deep.equal(['Nakov', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText']);
        expect(captureLog(() => readText(['Sofia', 'Berlin', 'Stop', 'AfterStop']))).to.deep.equal([
            'Sofia',
            'Berlin',
        ]);
    });

    it('02. Password', () => {
        expect(captureLog(() => password(['Nakov', '1234', 'Pass', '1324', '1234']))).to.deep.equal(
            ['Welcome Nakov!'],
        );
        expect(captureLog(() => password(['Gosho', 'secret', 'secret']))).to.deep.equal([
            'Welcome Gosho!',
        ]);
    });

    it('03. Sum Numbers', () => {
        expect(captureLog(() => sumNumbers(['100', '10', '20', '30', '40']))).to.deep.equal([
            '100',
        ]);
        expect(captureLog(() => sumNumbers(['20', '1', '2', '3', '4', '5', '6']))).to.deep.equal([
            '21',
        ]);
    });

    it('04. Sequence 2k+1', () => {
        expect(captureLog(() => sequence2kPlus1(['3']))).to.deep.equal(['1', '3']);
        expect(captureLog(() => sequence2kPlus1(['8']))).to.deep.equal(['1', '3', '7']);
        expect(captureLog(() => sequence2kPlus1(['17']))).to.deep.equal(['1', '3', '7', '15']);
        expect(captureLog(() => sequence2kPlus1(['31']))).to.deep.equal([
            '1',
            '3',
            '7',
            '15',
            '31',
        ]);
    });

    it('05. Account Balance', () => {
        expect(
            captureLog(() => accountBalance(['5.51', '69.42', '100', 'NoMoreMoney'])),
        ).to.deep.equal(['Increase: 5.51', 'Increase: 69.42', 'Increase: 100.00', 'Total: 174.93']);
        expect(captureLog(() => accountBalance(['120', '45.55', '-150']))).to.deep.equal([
            'Increase: 120.00',
            'Increase: 45.55',
            'Invalid operation!',
            'Total: 165.55',
        ]);
    });

    it('06. Max Number', () => {
        expect(captureLog(() => maxNumber(['100', '99', '80', '70', 'Stop']))).to.deep.equal([
            '100',
        ]);
        expect(captureLog(() => maxNumber(['-10', '20', '-30', 'Stop']))).to.deep.equal(['20']);
        expect(captureLog(() => maxNumber(['999', 'Stop']))).to.deep.equal(['999']);
        expect(captureLog(() => maxNumber(['-1', '-2', 'Stop']))).to.deep.equal(['-1']);
    });

    it('07. Min Number', () => {
        expect(captureLog(() => minNumber(['100', '99', '80', '70', 'Stop']))).to.deep.equal([
            '70',
        ]);
        expect(captureLog(() => minNumber(['45', '-20', '7', '99', 'Stop']))).to.deep.equal([
            '-20',
        ]);
        expect(captureLog(() => minNumber(['999', 'Stop']))).to.deep.equal(['999']);
        expect(captureLog(() => minNumber(['-1', '-2', 'Stop']))).to.deep.equal(['-2']);
    });

    it('08. Graduation', () => {
        expect(
            captureLog(() =>
                graduation([
                    'Gosho',
                    '5',
                    '5.5',
                    '6',
                    '5.43',
                    '5.5',
                    '6',
                    '5.55',
                    '5',
                    '6',
                    '6',
                    '5.43',
                    '5',
                ]),
            ),
        ).to.deep.equal(['Gosho graduated. Average grade: 5.53']);
        expect(
            captureLog(() => graduation(['Mimi', '5', '6', '5', '6', '5', '6', '6', '2', '3'])),
        ).to.deep.equal(['Mimi has been excluded at 8 grade']);
    });
});
