const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const tower = [];
const towerStack = [];
const answer = [];
Array.prototype.top = function() {
    if (this.length == 0) {
        return -1;
    } else {
        return this[this.length - 1];
    }
}

rl.on('line', (input) => {
    if (N == undefined) {
        N = parseInt(input);
    } else {
        tower.push(...input.split(' ').map(Number));
        rl.close();
    }
});

rl.on('close', () => {
    towerStack.push({value : tower.shift() , index : 1});
    answer.push(0);
    
    tower.forEach((height, index) => {
        if (height > towerStack.top().value) {
            while(height > towerStack.top().value && towerStack.top().value != -1) {
                towerStack.pop();
            }
            if (towerStack.length == 0) {
                answer.push(0);
            } else {
                answer.push(towerStack.top().index);
            }
            towerStack.push({value : height , index : index + 2});
        } else {
            answer.push(towerStack.top().index);
            towerStack.push({value : height , index : index + 2});
        }
    });

    console.log(answer.join(' '));
    process.exit();
});
