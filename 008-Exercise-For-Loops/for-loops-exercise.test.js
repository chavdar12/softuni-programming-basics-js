const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const numbersEndingIn7 = require('./01.numbersEndingIn7');
const multiplicationTable = require('./02.multiplicationTable');
const histogram = require('./03.histogram');
const cleverLily = require('./04.cleverLily');
const salary = require('./05.salary');
const oscars = require('./06.oscars');
const trekkingMania = require('./07.trekkingMania');
const tennisRanklist = require('./08.tennisRanklist');

describe('For Loops - Exercise', () => {
    it('01. Numbers Ending in 7', () => {
        const printed = captureLog(() => numbersEndingIn7());
        expect(printed).to.have.lengthOf(100);
        expect(printed.slice(0, 3)).to.deep.equal(['7', '17', '27']);
        expect(printed.at(-1)).to.equal('997');
    });

    it('02. Multiplication Table', () => {
        expect(captureLog(() => multiplicationTable(['5']))).to.deep.equal(
            Array.from({ length: 10 }, (_, i) => `${i + 1} * 5 = ${(i + 1) * 5}`),
        );
    });

    it('03. Histogram', () => {
        expect(captureLog(() => histogram(['3', '1', '2', '999']))).to.deep.equal([
            '66.67%',
            '0.00%',
            '0.00%',
            '0.00%',
            '33.33%',
        ]);
        expect(
            captureLog(() => histogram(['7', '800', '801', '250', '199', '399', '599', '799'])),
        ).to.deep.equal(['14.29%', '28.57%', '14.29%', '14.29%', '28.57%']);
        expect(
            captureLog(() =>
                histogram(['9', '367', '99', '200', '799', '999', '333', '555', '111', '9']),
            ),
        ).to.deep.equal(['33.33%', '33.33%', '11.11%', '11.11%', '11.11%']);
        expect(
            captureLog(() =>
                histogram([
                    '14',
                    '53',
                    '7',
                    '56',
                    '180',
                    '450',
                    '920',
                    '12',
                    '7',
                    '150',
                    '250',
                    '680',
                    '2',
                    '600',
                    '200',
                ]),
            ),
        ).to.deep.equal(['57.14%', '14.29%', '7.14%', '14.29%', '7.14%']);
    });

    it('04. Clever Lily', () => {
        expect(captureLog(() => cleverLily(['10', '170.00', '6']))).to.deep.equal(['Yes! 5.00']);
        expect(captureLog(() => cleverLily(['21', '1570.98', '3']))).to.deep.equal(['No! 997.98']);
    });

    it('05. Salary', () => {
        expect(
            captureLog(() =>
                salary([
                    '10',
                    '750',
                    'Facebook',
                    'Dev.bg',
                    'Instagram',
                    'Facebook',
                    'Reddit',
                    'Facebook',
                    'Facebook',
                ]),
            ),
        ).to.deep.equal(['You have lost your salary.']);
        expect(
            captureLog(() => salary(['3', '500', 'Github.com', 'Stackoverflow.com', 'softuni.bg'])),
        ).to.deep.equal(['500']);
        expect(
            captureLog(() => salary(['3', '500', 'Facebook', 'Stackoverflow.com', 'softuni.bg'])),
        ).to.deep.equal(['350']);
    });

    it('06. Oscars', () => {
        expect(
            captureLog(() =>
                oscars([
                    'Zahari Baharov',
                    '205',
                    '4',
                    'Johnny Depp',
                    '45',
                    'Will Smith',
                    '29',
                    'Jet Lee',
                    '10',
                    'Matthew Mcconaughey',
                    '39',
                ]),
            ),
        ).to.deep.equal(['Sorry, Zahari Baharov you need 247.5 more!']);
        expect(
            captureLog(() =>
                oscars([
                    'Sandra Bullock',
                    '340',
                    '5',
                    'Robert De Niro',
                    '50',
                    'Julia Roberts',
                    '40.5',
                    'Daniel Day-Lewis',
                    '39.4',
                    'Nicolas Cage',
                    '29.9',
                    'Stoyanka Mutafova',
                    '33',
                ]),
            ),
        ).to.deep.equal([
            'Congratulations, Sandra Bullock got a nominee for leading role with 1268.5!',
        ]);
    });

    it('07. Trekking Mania', () => {
        expect(
            captureLog(() =>
                trekkingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']),
            ),
        ).to.deep.equal(['1.84%', '6.75%', '5.21%', '31.60%', '54.60%']);
        expect(captureLog(() => trekkingMania(['5', '25', '41', '31', '250', '6']))).to.deep.equal([
            '0.00%',
            '1.70%',
            '7.08%',
            '8.78%',
            '82.44%',
        ]);
    });

    it('08. Tennis Ranklist', () => {
        expect(
            captureLog(() => tennisRanklist(['5', '1400', 'F', 'SF', 'W', 'W', 'SF'])),
        ).to.deep.equal(['Final points: 8040', 'Average points: 1328', '40.00%']);
        expect(captureLog(() => tennisRanklist(['4', '750', 'SF', 'W', 'SF', 'W']))).to.deep.equal([
            'Final points: 6190',
            'Average points: 1360',
            '50.00%',
        ]);
        expect(
            captureLog(() => tennisRanklist(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W'])),
        ).to.deep.equal(['Final points: 11040', 'Average points: 1405', '42.86%']);
    });
});
