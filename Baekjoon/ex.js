const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

rl.on('line', (input) => {
    [a, b] = input.split(' ');
    a = BigInt(a);
    b = BigInt(b);
    rl.close();
});

rl.on('close', () => {
    console.log((a+b).toString());
    process.exit();
});