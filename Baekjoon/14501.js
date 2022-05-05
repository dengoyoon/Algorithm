const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N = 0;
let tempN;
let memo;
const T = [0];
const P = [0];
let nextNum = 0;

rl.on('line', (input) => {
    if (N == 0) {
        N = parseInt(input);
        tempN = N;
        memo = new Array(N+1).fill(0);
    } else {
        tempN -= 1;
        const [_t, _p] = input.split(' ').map(Number);
        T.push(_t);
        P.push(_p);
        if (tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    let max = 0;

    for (let i = N ; i >= 1 ; i--) {
        if (i + T[i] > N+1) {
            memo[i] = 0;
        } else if (i + T[i] == N+1) {
            memo[i] = P[i];
        } else {
            nextNum = Math.max(...memo.slice(i + T[i]));
            memo[i] = P[i] + nextNum;
        }
        if (max < memo[i]) {
            max = memo[i];
        }

    }
    console.log(max);
    process.exit();
});