const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const sumSeconds = require('./01.sumSeconds');
const bonusScore = require('./02.bonusScore');
const timePlus15Minutes = require('./03.timePlus15Minutes');
const toyShop = require('./04.toyShop');
const godzillaVsKong = require('./05.godzillaVsKong');
const worldSwimmingRecord = require('./06.worldSwimmingRecord');
const shopping = require('./07.shopping');
const lunchBreak = require('./08.lunchBreak');

describe('Conditional Statements - Exercise', () => {
    it('01. Sum Seconds', () => {
        expect(captureLog(() => sumSeconds(['35', '45', '44']))).to.deep.equal(['2:04']);
        expect(captureLog(() => sumSeconds(['22', '7', '34']))).to.deep.equal(['1:03']);
        expect(captureLog(() => sumSeconds(['50', '50', '49']))).to.deep.equal(['2:29']);
        expect(captureLog(() => sumSeconds(['14', '12', '10']))).to.deep.equal(['0:36']);
    });

    it('02. Bonus Score', () => {
        const printed = (input) => captureLog(() => bonusScore(input)).map(Number);
        expect(printed(['20'])).to.deep.equal([6, 26]);
        expect(printed(['175'])).to.deep.equal([37, 212]);
        const [bonus, total] = printed(['2703']);
        expect(bonus).to.be.closeTo(270.3, 1e-9);
        expect(total).to.be.closeTo(2973.3, 1e-9);
        expect(printed(['15875'])).to.deep.equal([1589.5, 17464.5]);
    });

    it('03. Time + 15 Minutes', () => {
        expect(captureLog(() => timePlus15Minutes(['1', '46']))).to.deep.equal(['2:01']);
        expect(captureLog(() => timePlus15Minutes(['0', '01']))).to.deep.equal(['0:16']);
        expect(captureLog(() => timePlus15Minutes(['23', '59']))).to.deep.equal(['0:14']);
        expect(captureLog(() => timePlus15Minutes(['11', '08']))).to.deep.equal(['11:23']);
        expect(captureLog(() => timePlus15Minutes(['12', '49']))).to.deep.equal(['13:04']);
    });

    it('04. Toy Shop', () => {
        expect(captureLog(() => toyShop(['40.8', '20', '25', '30', '50', '10']))).to.deep.equal([
            'Yes! 418.20 lv left.',
        ]);
        expect(captureLog(() => toyShop(['320', '8', '2', '5', '5', '1']))).to.deep.equal([
            'Not enough money! 238.73 lv needed.',
        ]);
    });

    it('05. Godzilla vs. Kong', () => {
        expect(captureLog(() => godzillaVsKong(['20000', '120', '55.5']))).to.deep.equal([
            'Action!',
            'Wingard starts filming with 11340.00 leva left.',
        ]);
        expect(captureLog(() => godzillaVsKong(['15437.62', '186', '57.99']))).to.deep.equal([
            'Action!',
            'Wingard starts filming with 4186.33 leva left.',
        ]);
        expect(captureLog(() => godzillaVsKong(['9587.88', '222', '55.68']))).to.deep.equal([
            'Not enough money!',
            'Wingard needs 2495.77 leva more.',
        ]);
    });

    it('06. World Swimming Record', () => {
        expect(captureLog(() => worldSwimmingRecord(['10464', '1500', '20']))).to.deep.equal([
            'No, he failed! He was 20786.00 seconds slower.',
        ]);
        expect(captureLog(() => worldSwimmingRecord(['55555.67', '3017', '5.03']))).to.deep.equal([
            'Yes, he succeeded! The new world record is 17688.01 seconds.',
        ]);
    });

    it('07. Shopping', () => {
        expect(captureLog(() => shopping(['900', '2', '1', '3']))).to.deep.equal([
            'You have 198.75 leva left!',
        ]);
        expect(captureLog(() => shopping(['920.45', '3', '1', '1']))).to.deep.equal([
            'Not enough money! You need 3.92 leva more!',
        ]);
    });

    it('08. Lunch Break', () => {
        expect(captureLog(() => lunchBreak(['Game of Thrones', '60', '96']))).to.deep.equal([
            'You have enough time to watch Game of Thrones and left with 0 minutes free time.',
        ]);
        expect(captureLog(() => lunchBreak(['Teen Wolf', '48', '60']))).to.deep.equal([
            "You don't have enough time to watch Teen Wolf, you need 11 more minutes.",
        ]);
    });
});
