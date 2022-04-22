const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let div = 2;

rl.on('line', (input) => {
    n = parseInt(input);
    rl.close();
});

rl.on('close', () => {
    if (n == 1){
        process.exit();
    }
    while(n != 1) {
        if(n % div == 0) {
            n = n / div;
            console.log(div);
        } else {
            div += 1;
        }
    }

    process.exit();
});