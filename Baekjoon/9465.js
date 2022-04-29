const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sticker = [];
let t;
let tempT;
let stickerNumber;
let memo = [];
let inputCount = 0;
let tempSticker;

rl.on('line', (input) => {
    if (inputCount == 0) {
        t = parseInt(input);
        tempT = t;
        inputCount += 1;
    } else {
        if (inputCount == 1) {
            tempSticker = [];
            stickerNumber = parseInt(input);
            memo.push(Array.from(Array(2), () => Array(stickerNumber).fill(0)));
            inputCount += 1;
        } else {
            tempSticker.push(input.split(' ').map(Number));
            if (inputCount == 3) {
                sticker.push(tempSticker);
                inputCount = 1;
                tempT -= 1;
            } else {
                inputCount += 1;
            }
            if (tempT == 0) {
                rl.close();
            }
        }
    }
});

rl.on('close', () => {
    for (let testCase = 0 ; testCase < t ; testCase++) {
        const n = memo[testCase][0].length;
        [memo[testCase][0][0], memo[testCase][1][0]] = [sticker[testCase][0][0], sticker[testCase][1][0]];
        if (n > 1) {
            [memo[testCase][0][1], memo[testCase][1][1]] = [sticker[testCase][0][1] + memo[testCase][1][0], sticker[testCase][1][1] + memo[testCase][0][0]];
        }
        for (let i = 2 ; i < n ; i++) {
            memo[testCase][0][i] = Math.max(memo[testCase][1][i-1], memo[testCase][1][i-2]) + sticker[testCase][0][i];
            memo[testCase][1][i] = Math.max(memo[testCase][0][i-1], memo[testCase][0][i-2]) + sticker[testCase][1][i];
        }
        console.log(Math.max(memo[testCase][0][n-1], memo[testCase][1][n-1]));
    }
    process.exit();
});
