function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    for (let i = 0; input[i] !== 'stop'; i++) {
        const n = Number(input[i]);
        if (n < 0) {
            console.log('Number is negative.');
            continue;
        }
        let isPrime = n > 1;
        for (let d = 2; d * d <= n && isPrime; d++) {
            isPrime = n % d !== 0;
        }
        if (isPrime) {
            primeSum += n;
        } else {
            nonPrimeSum += n;
        }
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

module.exports = sumPrimeNonPrime;
