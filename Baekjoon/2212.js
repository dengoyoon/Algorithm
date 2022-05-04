const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;
let sensorPoints;
let inputCount = 0;
let diffArray = [];

rl.on('line', (input) => {
    if (inputCount == 0) {
        N = parseInt(input);
        inputCount += 1;
    } else if (inputCount == 1) {
        K = parseInt(input);
        inputCount += 1;
    } else {
        sensorPoints = input.split(' ').map(Number);
        rl.close();
    }
});

rl.on('close', () => {
    sensorPoints.sort((a, b) => {
        return a - b;
    })

    for (let i = 1 ; i < N ; i++) {
        diffArray.push(sensorPoints[i] - sensorPoints[i-1]);
    }

    diffArray.sort((a, b) => {
        return a - b;
    })

    diffArray = diffArray.slice(0, diffArray.length - K + 1);

    const result = diffArray.reduce((sum, current) => {
        return sum + current;
    }, 0);

    console.log(result);
    
    process.exit();
});