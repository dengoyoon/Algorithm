const { kill } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m, n, k;
let paper;
let visited;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (v) => {
    const queue = [v];
    let queueLength = 1;
    let idx = 0;
    let count = 1;
    visited[v.x][v.y] = 1;
    while(queueLength) {
        const out = queue[idx];
        idx += 1;
        queueLength -= 1;
        for (let i = 0 ; i < 4 ; i++) {
            const [nx, ny] = [out.x + dx[i], out.y + dy[i]];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
                continue;
            } else {
                if (paper[nx][ny] == 0 && visited[nx][ny] == 0) {
                    visited[nx][ny] = 1;
                    count += 1;
                    queue.push({x: nx, y: ny});
                    queueLength += 1;
                }
            }
        }
    }
    return count;
}

rl.on('line', (input) => {
    if (k == undefined) {
        [m, n, k] = input.split(' ').map(Number);
        paper = Array.from(Array(m), () => Array(n).fill(0));
        visited = Array.from(Array(m), () => Array(n).fill(0));
    } else {
        k -= 1;
        [sx, sy, ex, ey] = input.split(' ').map(Number);
        for (let i = sy; i < ey ; i++) {
            for (let j = sx; j < ex ; j++) {
                paper[i][j] = 1;
            }
        }
        if (k == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    const answer = [];
    for (let i = 0 ; i < m ; i++) {
        for (let j = 0 ; j < n ; j++) {
            if (visited[i][j] == 0 && paper[i][j] == 0) {
                answer.push(bfs({x: i, y: j}));
            }
        }
    }
    console.log(answer.length);
    answer.sort((a, b) => {
        return a - b;
    })
    console.log(answer.join(' '));
    process.exit();
});
