const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let S, T;
let inputCount = 1;

rl.on('line', (input) => {
    if (inputCount == 1) {
        S = input;
        inputCount -= 1;
    } else {
        T = input.split('');
        rl.close();
    }
});

rl.on('close', () => {
    const diff = T.length - S.length;
    let endPoint = T.length - 1;
    for (let i = 0 ; i < diff ; i++) {
        const popValue = T.pop();
        endPoint -= 1;

        if (popValue == "B") {
            T.reverse();
        }
    }
    const strT = T.join('');
    if (S == strT) {
        console.log(1);
    } else {
        console.log(0);
    }
    process.exit();
});