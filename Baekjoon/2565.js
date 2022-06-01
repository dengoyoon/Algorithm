const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let line = [];
let memo;
let N = 0;
let tempN;


rl.on('line', (input) => {
    if (N == 0) {
        N = parseInt(input);
        tempN = N;
        memo = new Array(N);
    } else {
        tempN -= 1;
        line.push(input.split(' ').map(Number));
        if(tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    line.sort((a, b) => {
        return a[0] - b[0];
    })
    for (let i = 0 ; i < N ; i++) {
        memo[i] = 1;
        for (let j = 0 ; j < i ; j++) {
            if(line[j][1] < line[i][1] && memo[i] < memo[j] + 1) {
                memo[i] = memo[j] + 1;
            }
        }
    }
    console.log(N - Math.max(...memo));
    process.exit();
});