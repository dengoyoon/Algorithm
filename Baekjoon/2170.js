const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, tempN;
const lines = [];
const resultLines = [];

rl.on('line', (input) => {
    if (N == undefined) {
        N = parseInt(input);
        tempN = N;
    } else {
        tempN -= 1;
        const [start, end] = input.split(' ').map(Number);
        lines.push({start: start, end: end});
        if (tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    lines.sort((a, b) => {
        return a.start - b.start;
    });

    resultLines.push(lines[0]);

    let j = 0;

    for (let i = 1 ; i < N ; i++) {
        if (lines[i].start < resultLines[j].end && resultLines[j].end < lines[i].end) {
            resultLines[j].end = lines[i].end;
        } else if (lines[i].start >= resultLines[j].end) {
            j += 1;
            resultLines.push(lines[i]);
        }
    }

    let lineLength = 0;
    resultLines.forEach(line => {
        lineLength += line.end - line.start;
    })
    
    console.log(lineLength);
    process.exit();
});
