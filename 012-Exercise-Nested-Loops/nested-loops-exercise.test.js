const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const numberPyramid = require('./01.numberPyramid');
const equalSumsEvenOddPosition = require('./02.equalSumsEvenOddPosition');
const sumPrimeNonPrime = require('./03.sumPrimeNonPrime');
const trainTheTrainers = require('./04.trainTheTrainers');
const specialNumbers = require('./05.specialNumbers');
const cinemaTickets = require('./06.cinemaTickets');

describe('Nested Loops - Exercise', () => {
    it('01. Number Pyramid', () => {
        expect(captureLog(() => numberPyramid(['7']))).to.deep.equal(['1', '2 3', '4 5 6', '7']);
        expect(captureLog(() => numberPyramid(['12']))).to.deep.equal([
            '1',
            '2 3',
            '4 5 6',
            '7 8 9 10',
            '11 12',
        ]);
        expect(captureLog(() => numberPyramid(['15']))).to.deep.equal([
            '1',
            '2 3',
            '4 5 6',
            '7 8 9 10',
            '11 12 13 14 15',
        ]);
    });

    it('02. Equal Sums Even Odd Position', () => {
        expect(captureLog(() => equalSumsEvenOddPosition(['100000', '100050']))).to.deep.equal([
            '100001 100012 100023 100034 100045',
        ]);
        expect(captureLog(() => equalSumsEvenOddPosition(['123456', '124000']))).to.deep.equal([
            '123464 123475 123486 123497 123530 123541 123552 123563 123574 123585 123596 123640 123651 123662 ' +
                '123673 123684 123695 123750 123761 123772 123783 123794 123860 123871 123882 123893 123970 123981 123992',
        ]);
        expect(captureLog(() => equalSumsEvenOddPosition(['299900', '300000']))).to.deep.equal([
            '299970 299981 299992',
        ]);
        expect(captureLog(() => equalSumsEvenOddPosition(['100115', '100120']))).to.deep.equal([]);
    });

    it('03. Sum Prime Non Prime', () => {
        expect(
            captureLog(() => sumPrimeNonPrime(['3', '9', '0', '7', '19', '4', 'stop'])),
        ).to.deep.equal(['Sum of all prime numbers is: 29', 'Sum of all non prime numbers is: 13']);
        expect(
            captureLog(() => sumPrimeNonPrime(['30', '83', '33', '-1', '20', 'stop'])),
        ).to.deep.equal([
            'Number is negative.',
            'Sum of all prime numbers is: 83',
            'Sum of all non prime numbers is: 83',
        ]);
        expect(captureLog(() => sumPrimeNonPrime(['0', '-9', '0', 'stop']))).to.deep.equal([
            'Number is negative.',
            'Sum of all prime numbers is: 0',
            'Sum of all non prime numbers is: 0',
        ]);
    });

    it('04. Train the Trainers', () => {
        expect(
            captureLog(() =>
                trainTheTrainers([
                    '2',
                    'While-Loop',
                    '6.00',
                    '5.50',
                    'For-Loop',
                    '5.84',
                    '5.66',
                    'Finish',
                ]),
            ),
        ).to.deep.equal([
            'While-Loop - 5.75.',
            'For-Loop - 5.75.',
            "Student's final assessment is 5.75.",
        ]);
        expect(
            captureLog(() =>
                trainTheTrainers([
                    '3',
                    'Arrays',
                    '4.53',
                    '5.23',
                    '5.00',
                    'Lists',
                    '5.83',
                    '6.00',
                    '5.42',
                    'Finish',
                ]),
            ),
        ).to.deep.equal(['Arrays - 4.92.', 'Lists - 5.75.', "Student's final assessment is 5.34."]);
        expect(
            captureLog(() =>
                trainTheTrainers([
                    '2',
                    'Objects and Classes',
                    '5.77',
                    '4.23',
                    'Dictionaries',
                    '4.62',
                    '5.02',
                    'RegEx',
                    '2.88',
                    '3.42',
                    'Finish',
                ]),
            ),
        ).to.deep.equal([
            'Objects and Classes - 5.00.',
            'Dictionaries - 4.82.',
            'RegEx - 3.15.',
            "Student's final assessment is 4.32.",
        ]);
    });

    it('05. Special Numbers', () => {
        expect(captureLog(() => specialNumbers(['3']))).to.deep.equal([
            '1111 1113 1131 1133 1311 1313 1331 1333 3111 3113 3131 3133 3311 3313 3331 3333',
        ]);
        expect(captureLog(() => specialNumbers(['11']))).to.deep.equal(['1111']);
        const sixteen = captureLog(() => specialNumbers(['16']))[0].split(' ');
        expect(sixteen).to.have.lengthOf(256);
        expect(sixteen).to.include('2418');
        expect(sixteen.at(-1)).to.equal('8888');
    });

    it('06. Cinema Tickets', () => {
        expect(
            captureLog(() =>
                cinemaTickets([
                    'Taxi',
                    '10',
                    'standard',
                    'kid',
                    'student',
                    'student',
                    'standard',
                    'standard',
                    'End',
                    'Scary Movie',
                    '6',
                    'student',
                    'student',
                    'student',
                    'student',
                    'student',
                    'student',
                    'Finish',
                ]),
            ),
        ).to.deep.equal([
            'Taxi - 60.00% full.',
            'Scary Movie - 100.00% full.',
            'Total tickets: 12',
            '66.67% student tickets.',
            '25.00% standard tickets.',
            '8.33% kids tickets.',
        ]);
        expect(
            captureLog(() =>
                cinemaTickets([
                    'The Matrix',
                    '20',
                    'student',
                    'standard',
                    'kid',
                    'kid',
                    'student',
                    'student',
                    'standard',
                    'student',
                    'End',
                    'The Green Mile',
                    '17',
                    'student',
                    'standard',
                    'standard',
                    'student',
                    'standard',
                    'student',
                    'End',
                    'Amadeus',
                    '3',
                    'standard',
                    'standard',
                    'standard',
                    'Finish',
                ]),
            ),
        ).to.deep.equal([
            'The Matrix - 40.00% full.',
            'The Green Mile - 35.29% full.',
            'Amadeus - 100.00% full.',
            'Total tickets: 17',
            '41.18% student tickets.',
            '47.06% standard tickets.',
            '11.76% kids tickets.',
        ]);
    });
});
