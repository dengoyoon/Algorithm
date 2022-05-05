const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let chessBoard;

rl.on('line', (input) => {
    N = parseInt(input);
    
    rl.close();
});

rl.on('close', () => {
    process.exit();
});