function shopping(input) {
    const [budget, gpus, cpus, ram] = input.map(Number);
    const gpuSum = gpus * 250;
    let total = gpuSum + cpus * gpuSum * 0.35 + ram * gpuSum * 0.1;
    if (gpus > cpus) {
        total *= 0.85;
    }
    if (total <= budget) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}

module.exports = shopping;
