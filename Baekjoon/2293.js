const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, tempN;
const coin = [];
let memo;

const getNumberOfCase = (num) => {
    if (num < 0) {
        return 0;
    }
    if (memo[num]) {
        return memo[num];
    }
    coin.forEach(value => {
        memo[num] += getNumberOfCase(num - value);
    });
    return memo[num];
}

rl.on('line', (input) => {
    if (n == undefined) {
        [n, k] = input.split(' ').map(Number);
        memo = new Array(k+1).fill(0);
        memo[0] = 1;
        tempN = n;
    } else {
        tempN -= 1;
        coin.push(parseInt(input));
        if(tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    console.log(getNumberOfCase(k));
    console.log(memo);
    process.exit();
});