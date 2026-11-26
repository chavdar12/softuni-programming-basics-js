function fruitOrVegetable(input) {
    const product = input[0];
    if (['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'].includes(product)) {
        console.log('fruit');
    } else if (['tomato', 'cucumber', 'pepper', 'carrot'].includes(product)) {
        console.log('vegetable');
    } else {
        console.log('unknown');
    }
}

module.exports = fruitOrVegetable;
