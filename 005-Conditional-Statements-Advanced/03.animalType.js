function animalType(input) {
    const animal = input[0];
    if (animal === 'dog') {
        console.log('mammal');
    } else if (['crocodile', 'tortoise', 'snake'].includes(animal)) {
        console.log('reptile');
    } else {
        console.log('unknown');
    }
}

module.exports = animalType;
