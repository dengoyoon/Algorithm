const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, tempN;
const painting = [];
let visited;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(v, color) {
    const queue = [v];
    let queueLength = 1;
    let idx = 0;
    visited[v.x][v.y] = 1;
    while(queueLength) {
        const out = queue[idx];
        queueLength -=1 ;
        idx += 1;
        for (let i = 0 ; i < 4 ; i++) {
            const [nx, ny] = [out.x + dx[i], out.y + dy[i]];
            if(nx < 0 || nx >= N || ny < 0 || ny >= N) {
                continue;
            } else {
                if (painting[nx][ny] == color && visited[nx][ny] == 0) {
                    visited[nx][ny] = 1;
                    queue.push({x: nx, y: ny});
                    queueLength += 1;
                }
            }
        }
    }
}

rl.on('line', (input) => {
    if (N == undefined) {
        N = parseInt(input);
        tempN = N;
        visited = Array.from(Array(N), () => Array(N).fill(0));
    } else {
        tempN -= 1;
        painting.push(input.split(''));
        if(tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    let general = 0;
    let colorBlindness = 0;
    for(let i = 0 ; i < N ; i++) {
        for(let j = 0 ; j < N ; j++) {
            if (visited[i][j] == 0) {
                general += 1;
                bfs({x: i, y: j}, painting[i][j]);
            }
        }
    }
    for(let i = 0 ; i < N ; i++) {
        for(let j = 0 ; j < N ; j++) {
            if (painting[i][j] == "G") {
                painting[i][j] = "R";
            }
            visited[i][j] = 0;
        }
    }
    for(let i = 0 ; i < N ; i++) {
        for(let j = 0 ; j < N ; j++) {
            if (visited[i][j] == 0) {
                colorBlindness += 1;
                bfs({x: i, y: j}, painting[i][j]);
            }
        }
    }

    console.log(`${general} ${colorBlindness}`);

    process.exit();
});
