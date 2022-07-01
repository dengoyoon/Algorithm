// DFS, 내리막길

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = [];
let memo;
let n, m;
let inputCount = 0;
let tempN;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (v) => {
    if (v.x == n-1 && v.y == m-1) {
        return 1;
    }
    if (memo[v.x][v.y] != -1) {
        return memo[v.x][v.y];
    }
    memo[v.x][v.y] = 0;
    for (let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [v.x + dx[i], v.y + dy[i]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
            continue;
        } else {
            if (map[nx][ny] < map[v.x][v.y]) {
                memo[v.x][v.y] += dfs({x: nx, y: ny});
            }
        }
    }
    // console.log(memo);
    return memo[v.x][v.y];
}

rl.on('line', (input) => {
    if (inputCount == 0) {
        [n, m] = input.split(' ').map(Number);
        tempN = n;
        memo = Array.from(Array(n), () => Array(m).fill(-1));
        inputCount += 1;
    } else {
        tempN -= 1;
        map.push(input.split(' ').map(Number));
        if(tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    console.log(dfs({x: 0, y: 0}));
    process.exit();
});