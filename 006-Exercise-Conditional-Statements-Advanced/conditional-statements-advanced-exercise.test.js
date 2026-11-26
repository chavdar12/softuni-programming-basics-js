const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const cinema = require('./01.cinema');
const summerOutfit = require('./02.summerOutfit');
const newHouse = require('./03.newHouse');
const fishingBoat = require('./04.fishingBoat');
const journey = require('./05.journey');
const operationsBetweenNumbers = require('./06.operationsBetweenNumbers');
const hotelRoom = require('./07.hotelRoom');
const onTimeForTheExam = require('./08.onTimeForTheExam');
const skiTrip = require('./09.skiTrip');

describe('Conditional Statements Advanced - Exercise', () => {
    it('01. Cinema', () => {
        expect(captureLog(() => cinema(['Premiere', '10', '12']))).to.deep.equal(['1440.00 leva']);
        expect(captureLog(() => cinema(['Normal', '21', '13']))).to.deep.equal(['2047.50 leva']);
        expect(captureLog(() => cinema(['Discount', '12', '30']))).to.deep.equal(['1800.00 leva']);
    });

    it('02. Summer Outfit', () => {
        expect(captureLog(() => summerOutfit(['16', 'Morning']))).to.deep.equal([
            "It's 16 degrees, get your Sweatshirt and Sneakers.",
        ]);
        expect(captureLog(() => summerOutfit(['22', 'Afternoon']))).to.deep.equal([
            "It's 22 degrees, get your T-Shirt and Sandals.",
        ]);
        expect(captureLog(() => summerOutfit(['28', 'Evening']))).to.deep.equal([
            "It's 28 degrees, get your Shirt and Moccasins.",
        ]);
        expect(captureLog(() => summerOutfit(['30', 'Afternoon']))).to.deep.equal([
            "It's 30 degrees, get your Swim Suit and Barefoot.",
        ]);
    });

    it('03. New House', () => {
        expect(captureLog(() => newHouse(['Roses', '55', '250']))).to.deep.equal([
            'Not enough money, you need 25.00 leva more.',
        ]);
        expect(captureLog(() => newHouse(['Tulips', '88', '260']))).to.deep.equal([
            'Hey, you have a great garden with 88 Tulips and 50.56 leva left.',
        ]);
        expect(captureLog(() => newHouse(['Narcissus', '119', '360']))).to.deep.equal([
            'Not enough money, you need 50.55 leva more.',
        ]);
    });

    it('04. Fishing Boat', () => {
        expect(captureLog(() => fishingBoat(['3000', 'Summer', '11']))).to.deep.equal([
            'Not enough money! You need 570.00 leva.',
        ]);
        expect(captureLog(() => fishingBoat(['3600', 'Autumn', '6']))).to.deep.equal([
            'Not enough money! You need 180.00 leva.',
        ]);
        expect(captureLog(() => fishingBoat(['2000', 'Winter', '13']))).to.deep.equal([
            'Yes! You have 50.00 leva left.',
        ]);
    });

    it('05. Journey', () => {
        expect(captureLog(() => journey(['50', 'summer']))).to.deep.equal([
            'Somewhere in Bulgaria',
            'Camp - 15.00',
        ]);
        expect(captureLog(() => journey(['75', 'winter']))).to.deep.equal([
            'Somewhere in Bulgaria',
            'Hotel - 52.50',
        ]);
        expect(captureLog(() => journey(['312', 'summer']))).to.deep.equal([
            'Somewhere in Balkans',
            'Camp - 124.80',
        ]);
        expect(captureLog(() => journey(['678.53', 'winter']))).to.deep.equal([
            'Somewhere in Balkans',
            'Hotel - 542.82',
        ]);
        expect(captureLog(() => journey(['1500', 'summer']))).to.deep.equal([
            'Somewhere in Europe',
            'Hotel - 1350.00',
        ]);
    });

    it('06. Operations Between Numbers', () => {
        expect(captureLog(() => operationsBetweenNumbers(['10', '12', '+']))).to.deep.equal([
            '10 + 12 = 22 - even',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['10', '1', '-']))).to.deep.equal([
            '10 - 1 = 9 - odd',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['7', '3', '*']))).to.deep.equal([
            '7 * 3 = 21 - odd',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['123', '12', '/']))).to.deep.equal([
            '123 / 12 = 10.25',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['10', '3', '%']))).to.deep.equal([
            '10 % 3 = 1',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['112', '0', '/']))).to.deep.equal([
            'Cannot divide 112 by zero',
        ]);
        expect(captureLog(() => operationsBetweenNumbers(['10', '0', '%']))).to.deep.equal([
            'Cannot divide 10 by zero',
        ]);
    });

    it('07. Hotel Room', () => {
        expect(captureLog(() => hotelRoom(['May', '15']))).to.deep.equal([
            'Apartment: 877.50 lv.',
            'Studio: 525.00 lv.',
        ]);
        expect(captureLog(() => hotelRoom(['June', '14']))).to.deep.equal([
            'Apartment: 961.80 lv.',
            'Studio: 1052.80 lv.',
        ]);
        expect(captureLog(() => hotelRoom(['August', '20']))).to.deep.equal([
            'Apartment: 1386.00 lv.',
            'Studio: 1520.00 lv.',
        ]);
    });

    it('08. On Time for the Exam', () => {
        const run = (input) => captureLog(() => onTimeForTheExam(input));
        expect(run(['9', '30', '9', '50'])).to.deep.equal(['Late', '20 minutes after the start']);
        expect(run(['9', '00', '10', '30'])).to.deep.equal(['Late', '1:30 hours after the start']);
        expect(run(['10', '00', '10', '00'])).to.deep.equal(['On time']);
        expect(run(['9', '00', '8', '30'])).to.deep.equal([
            'On time',
            '30 minutes before the start',
        ]);
        expect(run(['14', '00', '13', '55'])).to.deep.equal([
            'On time',
            '5 minutes before the start',
        ]);
        expect(run(['11', '30', '10', '55'])).to.deep.equal([
            'Early',
            '35 minutes before the start',
        ]);
        expect(run(['16', '00', '15', '00'])).to.deep.equal([
            'Early',
            '1:00 hours before the start',
        ]);
        expect(run(['11', '30', '8', '12'])).to.deep.equal([
            'Early',
            '3:18 hours before the start',
        ]);
        expect(run(['11', '30', '12', '29'])).to.deep.equal(['Late', '59 minutes after the start']);
    });

    it('09. Ski Trip', () => {
        expect(captureLog(() => skiTrip(['14', 'apartment', 'positive']))).to.deep.equal([
            '264.06',
        ]);
        expect(captureLog(() => skiTrip(['30', 'president apartment', 'negative']))).to.deep.equal([
            '730.80',
        ]);
        expect(captureLog(() => skiTrip(['12', 'room for one person', 'positive']))).to.deep.equal([
            '247.50',
        ]);
        expect(captureLog(() => skiTrip(['2', 'apartment', 'positive']))).to.deep.equal(['21.88']);
    });
});
