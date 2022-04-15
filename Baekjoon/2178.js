const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let n, m;
let tempN;
let maze = [];
let graph;
let visited;
let distance;

const bfs = (v) => {
    let queue = [v];
    visited[v.x][v.y] = true;
    distance[v.x][v.y] = 1;
    while(queue.length) {
        let out = queue.shift();
        graph[out.x][out.y].forEach( element => {
            if(!visited[element.x][element.y]) {
                if (distance[element.x][element.y] == 0) {
                    distance[element.x][element.y] = distance[out.x][out.y] + 1;
                }
                queue.push(element);
                visited[element.x][element.y] = true;
                if(element.x == n && element.y == m) {
                    return
                }
            }
        })
    }
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        [n, m] = input.split(' ').map(Number);
        tempN = n;
        maze.push(new Array(m + 2).fill(0));
        graph = Array.from(Array(n + 2), () => new Array(m + 2));
        for(let i = 0 ; i < n + 2 ; i++) {
            for(let j = 0 ; j < m + 2 ; j++) {
                graph[i][j] = [];
            }
        }
        visited = Array.from(Array(n + 2), () => Array(m + 2).fill(false));
        distance = Array.from(Array(n + 2), () => Array(m + 2).fill(0));
        inputCount -= 1;
    } else {
        tempN -= 1;
        const tempInput = "0" + input + "0";
        maze.push(tempInput.split('').map(Number));
        if (tempN == 0) {
            maze.push(new Array(m + 2).fill(0));
            rl.close();
        }
    }
});

rl.on('close', () => {
    for(let i = 1 ; i < n + 1 ; i++) {
        for(let j = 1 ; j < m + 1 ; j++) {
            if(maze[i][j] == 1) {
                if(maze[i-1][j] == 1) {
                    graph[i][j].push({x:i-1, y:j});
                }
                if(maze[i+1][j] == 1) {
                    graph[i][j].push({x:i+1, y:j});
                }
                if(maze[i][j-1] == 1) {
                    graph[i][j].push({x:i, y:j-1});
                }
                if(maze[i][j+1] == 1) {
                    graph[i][j].push({x:i, y:j+1});
                }
            }
        }
    }

    bfs({x:1, y:1});
    console.log(distance[n][m]);
    process.exit();
});