const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k, tempN;
const coin = [];

rl.on('line', (input) => {
    if (n == undefined) {
        [n, k] = input.split(' ').map(Number);
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
    console.log(coin);
    process.exit();
});