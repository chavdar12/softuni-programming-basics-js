function concatenateData(input) {
    const [firstName, lastName, age, town] = input;
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

module.exports = concatenateData;
