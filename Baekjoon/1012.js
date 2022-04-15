const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 1;
let inputArray = [];
let graph;
let visited;
let m, n, k;
let t, saveT;
let count;
let answer = [];
let modeMNK = 1;
let saveMNK;

const bfs = (v, t) => {
    count += 1;
    let queue = [v];
    visited[t][v.x][v.y] = true;
    while(queue.length) {
        let out = queue.shift();
        graph[t][out.x][out.y].forEach(element => {
            if (!visited[t][element.x][element.y]){
                queue.push(element);
                visited[t][element.x][element.y] = true;
            }
        });
    }
}


rl.on('line', (input) => {
    if (inputCount == 1) {
        t = parseInt(input);
        saveT = t;
        graph = new Array(t);
        inputArray = new Array(t);
        visited = new Array(t);
        saveMNK = new Array(t);
        inputCount -= 1;
    } else {
        if (modeMNK == 1) {
            [m, n, k] = input.split(' ').map(Number);
            saveMNK[t - 1] = {m: m, n: n, k: k};
            graph[t - 1] = Array.from(Array(m + 2), () => new Array(n + 2));
            for (let i = 0 ; i < m + 2 ; i++) {
                for (let j = 0 ; j < n + 2 ; j++) {
                    graph[t-1][i][j] = [];
                }
            }
            inputArray[t - 1] = Array.from(Array(m + 2), () => Array(n + 2).fill(0)); 
            visited[t - 1] = Array.from(Array(m + 2), () => Array(n + 2).fill(false)); 
            modeMNK = 0;
        } else {
            k -= 1;
            let [x, y] = input.split(' ').map( element => Number(element) + 1);
            inputArray[t - 1][x][y] = 1;
            if (k == 0) {
                t -= 1;
                if (t == 0){
                    rl.close();
                } else {
                    modeMNK = 1;
                }
            }
        }
    }
});

rl.on('close', () => {
    for(let test = 0 ; test < saveT ; test++) {
        count = 0;
        for (let i = 1 ; i < saveMNK[test].m + 1 ; i++) {
            for (let j = 1 ; j < saveMNK[test].n + 1 ; j++) {
                if (inputArray[test][i][j] == 1) {
                    if (inputArray[test][i-1][j] == 1) {
                        graph[test][i][j].push({x : (i-1), y : j});
                    }
                    if (inputArray[test][i+1][j] == 1) {
                        graph[test][i][j].push({x : (i+1), y : j});
                    }
                    if (inputArray[test][i][j-1] == 1) {
                        graph[test][i][j].push({x : i, y : (j-1)});
                    }
                    if (inputArray[test][i][j+1] == 1) {
                        graph[test][i][j].push({x : i, y : (j+1)});
                    }
                }
            }
        }
        
        for (let i = 1 ; i < saveMNK[test].m + 1 ; i++) {
            for (let j = 1 ; j < saveMNK[test].n + 1 ; j++) {
                if(inputArray[test][i][j] == 1 && !visited[test][i][j]) {
                    bfs({x: i, y: j}, test);
                }
            }
        }
        answer.push(count);
    }

    answer.reverse().forEach( element => {
        console.log(element);
    });
        
    process.exit();
})