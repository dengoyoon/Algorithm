const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let X, Y, side, diagonal;

rl.on('line', (input) => {
    [ X, Y, side, diagonal ] = input.split(' ').map(Number);
    rl.close();
});

rl.on('close', () => {
    if (2 * side > diagonal) {
        const shorterSide = (X < Y)? X : Y;
        const result = shorterSide * diagonal + getOneSideTime(X - shorterSide, Y - shorterSide);
        console.log(result);
    } else {
        console.log((X + Y) * side);
    }
    process.exit();
});

const getOneSideTime = (_X, _Y) => {
    if (X == 0 && Y == 0) {
        return 0;
    } else {
        let result;
        const shortCase = (diagonal < side)? diagonal : side;
        const length = _X + _Y;
        if (length % 2 == 0) {
            result = length * shortCase;
        } else {
            result = (length - 1) * shortCase + side;
        }
        return result;
    }
}