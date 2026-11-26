function worldSwimmingRecord(input) {
    const [record, distance, secondsPerMeter] = input.map(Number);
    const time = distance * secondsPerMeter + Math.floor(distance / 15) * 12.5;
    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(time - record).toFixed(2)} seconds slower.`);
    }
}

module.exports = worldSwimmingRecord;
