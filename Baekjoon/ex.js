const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

const ff = () => {
  a = [1,2,3,4,5];
  a.forEach(e => {
    if (e == 3) {
      return 100;
    }
  })
  return 0;
}

rl.on('line', (input) => {
    
    rl.close();
});

rl.on('close', () => {
    console.log(ff());
    process.exit();
});