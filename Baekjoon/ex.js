const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
    
    rl.close();
});

rl.on('close', () => {
    process.exit();
});

a = [1,2,3];
console.log(Math.max(...a));