const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

const points = [{x: 8, y: 4}, {x: 7, y: 4}, {x: 3, y: 9}, {x: 5, y: 3}];
points.sort((a, b) => {
  return a.x - b.x;
})

console.log(points);

rl.on('line', (input) => {
    
    rl.close();
});

rl.on('close', () => {
    console.log(ff());
    process.exit();
});