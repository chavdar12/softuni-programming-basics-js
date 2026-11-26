const { expect } = require('chai');
const { captureLog } = require('./test-helpers/console');

const movieProfit = require('./01.movieProfit');
const familyTrip = require('./02.familyTrip');
const gymnastics = require('./03.gymnastics');
const movieRatings = require('./04.movieRatings');
const touristShop = require('./05.touristShop');
const vetParking = require('./06.vetParking');

describe('Exam Preparation', () => {
    it('01. Movie Profit', () => {
        expect(
            captureLog(() => movieProfit(['The Programmer', '20', '500', '7.50', '7'])),
        ).to.deep.equal(['The profit from the movie The Programmer is 69750.00 lv.']);
        expect(
            captureLog(() => movieProfit(['Python Basics', '40', '34785', '10.45', '14'])),
        ).to.deep.equal(['The profit from the movie Python Basics is 12504511.80 lv.']);
        expect(
            captureLog(() => movieProfit(['The Jungle', '22', '20500', '9.37', '30'])),
        ).to.deep.equal(['The profit from the movie The Jungle is 2958109.00 lv.']);
    });

    it('02. Family Trip', () => {
        expect(captureLog(() => familyTrip(['800.50', '8', '100', '2']))).to.deep.equal([
            'Ivanovi will be left with 24.49 leva after vacation.',
        ]);
        expect(captureLog(() => familyTrip(['500', '7', '66', '15']))).to.deep.equal([
            '37.00 leva needed.',
        ]);
    });

    it('03. Gymnastics', () => {
        expect(captureLog(() => gymnastics(['Bulgaria', 'ribbon']))).to.deep.equal([
            'The team of Bulgaria get 19.000 on ribbon.',
            '5.00%',
        ]);
        expect(captureLog(() => gymnastics(['Russia', 'rope']))).to.deep.equal([
            'The team of Russia get 18.600 on rope.',
            '7.00%',
        ]);
        expect(captureLog(() => gymnastics(['Italy', 'hoop']))).to.deep.equal([
            'The team of Italy get 18.800 on hoop.',
            '6.00%',
        ]);
    });

    it('04. Movie Ratings', () => {
        expect(
            captureLog(() =>
                movieRatings([
                    '5',
                    'A Star is Born',
                    '7.8',
                    'Creed 2',
                    '7.3',
                    'Mary Poppins',
                    '7.2',
                    'Vice',
                    '7.2',
                    'Captain Marvel',
                    '7.1',
                ]),
            ),
        ).to.deep.equal([
            'A Star is Born is with highest rating: 7.8',
            'Captain Marvel is with lowest rating: 7.1',
            'Average rating: 7.3',
        ]);
        expect(
            captureLog(() =>
                movieRatings(['3', 'Interstellar', '8.5', 'Dangal', '8.3', 'Green Book', '8.2']),
            ),
        ).to.deep.equal([
            'Interstellar is with highest rating: 8.5',
            'Green Book is with lowest rating: 8.2',
            'Average rating: 8.3',
        ]);
    });

    it('05. Tourist Shop', () => {
        expect(
            captureLog(() =>
                touristShop([
                    '153.20',
                    'Backpack',
                    '25.20',
                    'Shoes',
                    '54',
                    'Sunglasses',
                    '30',
                    'Stop',
                ]),
            ),
        ).to.deep.equal(['You bought 3 products for 94.20 leva.']);
        expect(
            captureLog(() => touristShop(['54', 'Thermal underwear', '24', 'Sunscreen', '45'])),
        ).to.deep.equal(["You don't have enough money!", 'You need 15.00 leva!']);
    });

    it('06. Vet Parking', () => {
        expect(captureLog(() => vetParking(['2', '5']))).to.deep.equal([
            'Day: 1 - 5.50 leva',
            'Day: 2 - 9.50 leva',
            'Total: 15.00 leva',
        ]);
        expect(captureLog(() => vetParking(['5', '2']))).to.deep.equal([
            'Day: 1 - 2.25 leva',
            'Day: 2 - 3.50 leva',
            'Day: 3 - 2.25 leva',
            'Day: 4 - 3.50 leva',
            'Day: 5 - 2.25 leva',
            'Total: 13.75 leva',
        ]);
    });
});
