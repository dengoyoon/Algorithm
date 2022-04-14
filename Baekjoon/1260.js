const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let n, m, v;
let tempM;
let graph;
let visited;
let dfsResult = "";
let bfsResult = "";

const dfs = (node) => {
    if (visited[node]) {
        return;
    }
    visited[node] = true;
    dfsResult += `${node} `;
    graph[node].forEach( element => {
        dfs(element);
    });
}

const bfs = (node) => {
    let queue = [node];
    visited[node] = true;
    while(queue.length != 0) {
        let output = queue.shift();
        bfsResult += `${output} `;
        graph[output].forEach( element => {
            if(!visited[element]) {
                queue.push(element);
                visited[element] = true;
            }
        });
    }
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        [n, m, v] = input.split(" ").map(Number);
        tempM = m;
        graph = new Array(n + 1);
        for(let i = 0 ; i < n + 1 ; i++) {
            graph[i] = [];
        }
        visited = new Array(n + 1).fill(false);
        inputCount -= 1;
    } else {
        tempM -= 1;
        let [start, end] = input.split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
        if (tempM == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    graph.forEach( (element) => {
        element.sort( (a, b) => {
            return a - b;
        });
    });

    dfs(v);
    visited.fill(false);
    bfs(v);

    console.log(dfsResult);
    console.log(bfsResult);
    process.exit();
})