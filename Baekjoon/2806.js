const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 3;
let graph;
let visited;
let computerNumber;
let edgeNumber;
let tempEdgeNum;

const dfs = (v) => {
    if (visited[v] == 1) {
        return;
    }
    visited[v] = 1;
    graph[v].forEach( element => {
        dfs(element);
    });
}

const bfs = (v) => {
    let queue = [v];
    visited[v] = 1;
    while(queue.length) {
        let out = queue.shift();
        graph[out].forEach( element => {
           if(!visited[element]) {
               queue.push(element);
               visited[element] = 1;
           } 
        });
    }
}


rl.on('line', (input) => {
    if (inputCount == 3) {
        computerNumber = parseInt(input);
        visited = new Array(computerNumber + 1).fill(0);
        graph = new Array(computerNumber + 1);
        for (let i = 0 ; i < computerNumber + 1 ; i++){
            graph[i] = [];
        }
        inputCount -= 1;
    } else if(inputCount == 2) {
        edgeNumber = parseInt(input);
        tempEdgeNum = edgeNumber;
        inputCount -= 1;
    } else {
        tempEdgeNum -= 1;
        let [start, end] = input.split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
        if (tempEdgeNum == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    graph.forEach( element => {
        element.sort( (a,b) => {
            return a - b;
        });
    });
    dfs(1);
    const result = visited.reduce( (sum, x) => {
       return sum + x; 
    }, 0);
    console.log(result - 1);
    process.exit();
})