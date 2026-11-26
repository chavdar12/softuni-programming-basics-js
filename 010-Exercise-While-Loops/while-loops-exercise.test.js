const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const oldBooks = require('./01.oldBooks');
const examPreparation = require('./02.examPreparation');
const vacation = require('./03.vacation');
const walking = require('./04.walking');
const coins = require('./05.coins');
const cake = require('./06.cake');
const moving = require('./07.moving');

describe('While Loops - Exercise', () => {
    it('01. Old Books', () => {
        expect(
            captureLog(() => oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy'])),
        ).to.deep.equal(['You checked 2 books and found it.']);
        expect(
            captureLog(() =>
                oldBooks([
                    'The Spot',
                    'Hunger Games',
                    'Harry Potter',
                    'Torronto',
                    'Spotify',
                    'No More Books',
                ]),
            ),
        ).to.deep.equal(['The book you search is not here!', 'You checked 4 books.']);
        expect(
            captureLog(() =>
                oldBooks([
                    'Bourne',
                    'True Story',
                    'Forever',
                    'More Space',
                    'The Girl',
                    'Spaceship',
                    'Strongest',
                    'Profit',
                    'Tripple',
                    'Stella',
                    'The Matrix',
                    'Bourne',
                ]),
            ),
        ).to.deep.equal(['You checked 10 books and found it.']);
    });

    it('02. Exam Preparation', () => {
        expect(
            captureLog(() =>
                examPreparation([
                    '3',
                    'Money',
                    '6',
                    'Story',
                    '4',
                    'Spring Time',
                    '5',
                    'Bus',
                    '6',
                    'Enough',
                ]),
            ),
        ).to.deep.equal(['Average score: 5.25', 'Number of problems: 4', 'Last problem: Bus']);
        expect(
            captureLog(() =>
                examPreparation(['2', 'Income', '3', 'Game Info', '6', 'Best Player', '4']),
            ),
        ).to.deep.equal(['You need a break, 2 poor grades.']);
    });

    it('03. Vacation', () => {
        expect(
            captureLog(() => vacation(['2000', '1000', 'spend', '1200', 'save', '2000'])),
        ).to.deep.equal(['You saved the money for 2 days.']);
        expect(
            captureLog(() =>
                vacation([
                    '110',
                    '60',
                    'spend',
                    '10',
                    'spend',
                    '10',
                    'spend',
                    '10',
                    'spend',
                    '10',
                    'spend',
                    '10',
                ]),
            ),
        ).to.deep.equal(["You can't save the money.", '5']);
        expect(
            captureLog(() =>
                vacation([
                    '250',
                    '150',
                    'spend',
                    '50',
                    'spend',
                    '50',
                    'save',
                    '100',
                    'save',
                    '100',
                ]),
            ),
        ).to.deep.equal(['You saved the money for 4 days.']);
    });

    it('04. Walking', () => {
        expect(captureLog(() => walking(['1000', '1500', '2000', '6500']))).to.deep.equal([
            'Goal reached! Good job!',
            '1000 steps over the goal!',
        ]);
        expect(
            captureLog(() => walking(['1500', '300', '2500', '3000', 'Going home', '200'])),
        ).to.deep.equal(['2500 more steps to reach goal.']);
        expect(
            captureLog(() =>
                walking(['1500', '3000', '250', '1548', '2000', 'Going home', '2000']),
            ),
        ).to.deep.equal(['Goal reached! Good job!', '298 steps over the goal!']);
        expect(
            captureLog(() => walking(['125', '250', '4000', '30', '2678', '4682'])),
        ).to.deep.equal(['Goal reached! Good job!', '1765 steps over the goal!']);
    });

    it('05. Coins', () => {
        expect(captureLog(() => coins(['1.23']))).to.deep.equal(['4']);
        expect(captureLog(() => coins(['2']))).to.deep.equal(['1']);
        expect(captureLog(() => coins(['0.56']))).to.deep.equal(['3']);
        expect(captureLog(() => coins(['2.73']))).to.deep.equal(['5']);
    });

    it('06. Cake', () => {
        expect(captureLog(() => cake(['10', '10', '20', '20', '20', '20', '21']))).to.deep.equal([
            'No more cake left! You need 1 pieces more.',
        ]);
        expect(captureLog(() => cake(['10', '2', '2', '4', '6', 'STOP']))).to.deep.equal([
            '8 pieces are left.',
        ]);
    });

    it('07. Moving', () => {
        expect(
            captureLog(() => moving(['10', '10', '2', '20', '20', '20', '20', '122'])),
        ).to.deep.equal(['No more free space! You need 2 Cubic meters more.']);
        expect(captureLog(() => moving(['10', '1', '2', '4', '6', 'Done']))).to.deep.equal([
            '10 Cubic meters left.',
        ]);
    });
});
