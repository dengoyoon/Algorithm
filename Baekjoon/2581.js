const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m,n;

let two = 2;

let sosu = [];

rl.on('line', (input) => {
    if (two == 2) {
        m = parseInt(input);
        two -= 1;
    } else if (two == 1) {
        n = parseInt(input);
        rl.close();
    }
});

rl.on('close', () => {
    if (m == 1 && n == 1) {
        console.log(-1);
        process.exit();
    }

    for(var i = m ; i <= n ; i++) {
        sosu.push(i);
    }

    for(var i = 2 ; i <= n ; i++) {
        sosu.forEach( (element, index) => {
            if (element == 0 || element == i) {
                ;
            } else if (element % i == 0 || element == 1) {
                sosu[index] = 0
            }
        })
    }
    sosu = sosu.filter( (element) => element != 0)

    if(sosu.length == 0) {
        console.log(-1);
        process.exit();
    }
    
    const result = sosu.reduce( (sum, current) => {
        return sum + current;
    }, 0)

    console.log(result);
    console.log(sosu[0]);

    process.exit();
})