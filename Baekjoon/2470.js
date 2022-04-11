const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let fluid;

let two = 2;


rl.on('line', (input) => {
    if (two == 2) {
        t = parseInt(input);
        two -= 1;
    } else if (two == 1) {
        fluid = input.split(' ').map(Number);
        rl.close();
    }
});

rl.on('close', () => {
    
    fluid.sort( (a, b) => {
        return a - b;
    })

    console.log(fluid);
    
    process.exit();
})