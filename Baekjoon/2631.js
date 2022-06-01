const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 0;
let N;
let tempN;
const childrenNumbers = [];
let memo;

rl.on('line', (input) => {
    if (inputCount == 0) {
        N = parseInt(input);
        tempN = N;
        memo = new Array(N);
        inputCount += 1;
    } else {
        tempN -= 1;
        childrenNumbers.push(parseInt(input));
        if(tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    for (let i = 0 ; i < N ; i++) {
        memo[i] = 1;
        for (let j = 0 ; j < i ; j++) {
            if(childrenNumbers[j] < childrenNumbers[i] && memo[i] < memo[j] + 1) {
                memo[i] = memo[j] + 1;
            }
        }
    }
    console.log(N - Math.max(...memo));
    process.exit();
});
