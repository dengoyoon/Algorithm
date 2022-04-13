const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 4;
let n, m;
let haveCard = [];
let findCard = [];

const binarySearch = (array, findValue) => {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high)/2);
    
    while (low <= high) {
        if (findValue == array[mid]) {
            return "1 ";
        } else if (findValue < array[mid]){
            high = mid - 1;
            mid = Math.floor((low + high)/2);
        } else {
            low = mid + 1;
            mid = Math.floor((low + high)/2);
        }
    }
    return "0 "
}

rl.on('line', (input) => {
    if (inputCount == 4) {
        n = parseInt(input);
        inputCount -= 1;
    } else if (inputCount == 3) {
        haveCard = input.split(' ').map(Number);
        haveCard.sort( (a,b) => {return a - b});
        inputCount -= 1;
    } else if (inputCount == 2) {
        m = parseInt(input);
        inputCount -= 1;
    } else {
        findCard = input.split(' ').map(Number);
        rl.close();
    }
});

rl.on('close', () => {
    let result = "";
    findCard.map( (element) => {
        result += binarySearch(haveCard, element);
    });
    console.log(result);
    process.exit();
})