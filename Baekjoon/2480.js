const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let diceNumber = [0,0,0,0,0,0];

rl.on('line', (input) => {
  input.split(' ').map( (element) => {
    diceNumber[parseInt(element) - 1] += 1;
  });

  rl.close();
});

rl.on('close', () => {
    let price = 0;

  diceNumber.forEach( (element, index) => {
        if (element == 3) {
            price = 10000 + (index + 1) * 1000;
            console.log(price);
            process.exit();
        } else if (element == 2) {
            price = 1000 + (index + 1) * 100;
            console.log(price);
            process.exit();
        } else if (element == 1) {
            price = (index + 1) * 100;
        }
    })

    console.log(price);
    process.exit();
})