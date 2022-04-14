const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let inputArray = [];
let graph;
let visited;
let n;
let tempN;
let count;
let answer = [];


const dfs = (x, y) => {
    if(visited[x][y]) {
        return;
    }
    visited[x][y] = true;
    count += 1;
    graph[x][y].forEach( element => {
        dfs(element.x, element.y);
    });
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        n = parseInt(input);
        tempN = n;
        graph = Array.from(Array(n+2), () => new Array(n+2))
        for(let i = 0 ; i < n + 2 ; i++){
            for(let j = 0 ; j < n + 2 ; j++){
                graph[i][j] = [];
            }
        }
        visited = Array.from(Array(n+2), () => Array(n+2).fill(false));
        inputArray.push(new Array(n + 2).fill(0));
        inputCount -= 1;
    } else {
        tempN -= 1;
        let tempInput = "0" + input + "0";
        inputArray.push(tempInput.split('').map(Number));
        if(tempN == 0) {
            inputArray.push(new Array(n + 2).fill(0));
            rl.close();
        }
    }
});

rl.on('close', () => {
    for(let i = 1 ; i < n + 1 ; i++){
        for(let j = 1 ; j < n + 1 ; j++){
            if(inputArray[i][j] == 1) {
                if (inputArray[i + 1][j] == 1) {
                    graph[i][j].push({x:(i + 1), y:j});
                }
                if (inputArray[i - 1][j] == 1) {
                    graph[i][j].push({x:(i - 1), y:j});
                }
                if (inputArray[i][j + 1] == 1) {
                    graph[i][j].push({x:i, y:(j + 1)});
                }
                if (inputArray[i][j - 1] == 1) {
                    graph[i][j].push({x:i, y:(j - 1)});
                }
            }
        }
    }

    for(let i = 1 ; i < n + 1 ; i++){
        for(let j = 1 ; j < n + 1 ; j++){
            if(inputArray[i][j] == 1 && !visited[i][j]) {
                count = 0;
                dfs(i, j);
                answer.push(count);
            }
        }
    }
    answer.sort( (a, b) => {
        return a - b;
    });
    console.log(answer.length);
    answer.forEach( element => {
        console.log(element);
    });


    process.exit();
})