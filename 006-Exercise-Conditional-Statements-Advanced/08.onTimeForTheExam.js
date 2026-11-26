function onTimeForTheExam(input) {
    const [examH, examM, arriveH, arriveM] = input.map(Number);
    const diff = examH * 60 + examM - (arriveH * 60 + arriveM);
    const abs = Math.abs(diff);
    if (diff < 0) {
        console.log('Late');
    } else if (diff <= 30) {
        console.log('On time');
    } else {
        console.log('Early');
    }
    if (diff === 0) {
        return;
    }
    const amount =
        abs < 60
            ? `${abs} minutes`
            : `${Math.floor(abs / 60)}:${String(abs % 60).padStart(2, '0')} hours`;
    console.log(`${amount} ${diff < 0 ? 'after' : 'before'} the start`);
}

module.exports = onTimeForTheExam;
