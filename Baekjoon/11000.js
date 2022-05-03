const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = -1;
let classRoom = 1;
let schedule = [];

rl.on('line', (input) => {
    if (N == -1) {
        N = parseInt(input);
    } else {
        N -= 1;
        const [_s, _e] = input.split(' ').map(Number);
        schedule.push({start: _s, end: _e});
        if (N == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    schedule.sort((a, b) => {
        const [aLen, bLen] = [a.end - a.start, b.end - b.start];
        return bLen - aLen;
    })

    let arrange = {start: schedule[0].start, end: schedule[0].end};
    for (let i = 1 ; i < schedule.length ; i++) {
        if (arrange.start < schedule[i].start && arrange.end > schedule[i].end) {
            arrange.start = schedule[i].start;
            arrange.end = schedule[i].end;
            classRoom += 1;
        } else {
            if (schedule[i].start < arrange.end && arrange.end < schedule[i].end) {
                arrange.start = schedule[i].start;
                classRoom += 1;
            }
            else if (schedule[i].start < arrange.start && arrange.start < schedule[i].end) {
                arrange.end = schedule[i].end;
                classRoom += 1;
            }
        }
    }

    console.log(classRoom);
    process.exit();
});