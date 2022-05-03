const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// console.log("A".charCodeAt(0));
let N = -1;
const inputArr = [];
let abc = new Array(26).fill(0);
let num = 9;
let sum = 0;

rl.on('line', (input) => {
    if (N == -1) {
        N = parseInt(input);
    } else {
        N -= 1;
        inputArr.push(input);
        if (N == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    inputArr.forEach(input => {
        let mul = 1;
        Array.from(input).reverse().forEach( alphabet => {
            abc[alphabet.charCodeAt(0) - 65] += mul;
            mul *= 10;
        })
    })
    abc = abc.filter( element => {
        return element != 0;
    })
    abc.sort((a,b) => {
        return b-a;
    })
    abc.forEach(element => {
        sum += element * num;
        num -= 1;
    })

    console.log(sum);
    
    process.exit();
});