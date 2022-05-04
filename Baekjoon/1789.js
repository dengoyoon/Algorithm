const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S;
let i = 1;
let count = 0;

rl.on('line', (input) => {
    S = parseInt(input);
    rl.close();
});

rl.on('close', () => {
    while(S >= i) {
        S -= i;
        i += 1;
        count += 1;
    }
    console.log(count);
    process.exit();
});