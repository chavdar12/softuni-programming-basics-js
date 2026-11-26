const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const clock = require('./01.clock');
const multiplicationTable = require('./02.multiplicationTable');
const combinations = require('./03.combinations');
const sumOfTwoNumbers = require('./04.sumOfTwoNumbers');
const travelling = require('./05.travelling');
const building = require('./06.building');

describe('Nested Loops - Lab', () => {
    it('01. Clock', () => {
        const printed = captureLog(() => clock());
        expect(printed).to.have.lengthOf(24 * 60);
        expect(printed.slice(0, 11)).to.deep.equal([
            '0:0',
            '0:1',
            '0:2',
            '0:3',
            '0:4',
            '0:5',
            '0:6',
            '0:7',
            '0:8',
            '0:9',
            '0:10',
        ]);
        expect(printed.at(-1)).to.equal('23:59');
    });

    it('02. Multiplication Table', () => {
        const printed = captureLog(() => multiplicationTable());
        expect(printed).to.have.lengthOf(100);
        expect(printed[0]).to.equal('1 * 1 = 1');
        expect(printed[9]).to.equal('1 * 10 = 10');
        expect(printed.at(-1)).to.equal('10 * 10 = 100');
    });

    it('03. Combinations', () => {
        expect(captureLog(() => combinations(['25']))).to.deep.equal(['351']);
        expect(captureLog(() => combinations(['20']))).to.deep.equal(['231']);
        expect(captureLog(() => combinations(['5']))).to.deep.equal(['21']);
    });

    it('04. Sum of Two Numbers', () => {
        expect(captureLog(() => sumOfTwoNumbers(['1', '10', '5']))).to.deep.equal([
            'Combination N:4 (1 + 4 = 5)',
        ]);
        expect(captureLog(() => sumOfTwoNumbers(['88', '888', '1000']))).to.deep.equal([
            'Combination N:20025 (112 + 888 = 1000)',
        ]);
        expect(captureLog(() => sumOfTwoNumbers(['23', '24', '20']))).to.deep.equal([
            '4 combinations - neither equals 20',
        ]);
        expect(captureLog(() => sumOfTwoNumbers(['88', '888', '2000']))).to.deep.equal([
            '641601 combinations - neither equals 2000',
        ]);
    });

    it('05. Travelling', () => {
        expect(
            captureLog(() =>
                travelling([
                    'Greece',
                    '1000',
                    '200',
                    '200',
                    '300',
                    '100',
                    '150',
                    '240',
                    'Spain',
                    '1200',
                    '300',
                    '500',
                    '193',
                    '423',
                    'End',
                ]),
            ),
        ).to.deep.equal(['Going to Greece!', 'Going to Spain!']);
        expect(
            captureLog(() =>
                travelling([
                    'France',
                    '2000',
                    '300',
                    '300',
                    '200',
                    '400',
                    '190',
                    '258',
                    '360',
                    'Portugal',
                    '1450',
                    '400',
                    '400',
                    '200',
                    '300',
                    '300',
                    'Egypt',
                    '1900',
                    '1000',
                    '280',
                    '300',
                    '500',
                    'End',
                ]),
            ),
        ).to.deep.equal(['Going to France!', 'Going to Portugal!', 'Going to Egypt!']);
    });

    it('06. Building', () => {
        expect(captureLog(() => building(['6', '4']))).to.deep.equal([
            'L60 L61 L62 L63',
            'A50 A51 A52 A53',
            'O40 O41 O42 O43',
            'A30 A31 A32 A33',
            'O20 O21 O22 O23',
            'A10 A11 A12 A13',
        ]);
        expect(captureLog(() => building(['4', '4']))).to.deep.equal([
            'L40 L41 L42 L43',
            'A30 A31 A32 A33',
            'O20 O21 O22 O23',
            'A10 A11 A12 A13',
        ]);
        expect(captureLog(() => building(['1', '2']))).to.deep.equal(['L10 L11']);
    });
});
