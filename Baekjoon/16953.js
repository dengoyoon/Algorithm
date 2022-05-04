const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let A, B;
let count = 1;

rl.on('line', (input) => {
    [A, B] = input.split(' ').map(Number);
    rl.close();
});

rl.on('close', () => {
    while(B > A) {
        if (B % 2 == 0) {
            B /= 2;
        } else if (B % 10 == 1) {
            B = parseInt(B / 10);
        } else if (B % 2 == 1) {
            console.log(-1);
            break;
        }
        count += 1;
    }
    if (A == B) {
        console.log(count);
    } else if (A > B) {
        console.log(-1);
    }
    process.exit();
});