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
    if (memo[v.x][v.y] != 0) {
        return ;
    }
    const points = [];
    let sum = 0;
    for (let i = 0 ; i < 4 ; i++) {
        const [nx, ny] = [v.x + dx[i], v.y + dy[i]];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
            continue;
        } else {
            if (map[nx][ny] < map[v.x][v.y]) {
                points.push({value : map[nx][ny], x : nx, y: ny});
            } else {
                sum += memo[nx][ny];
            }
        }
    }
    if (v.x == 0 && v.y == 0) {
        memo[v.x][v.y] = 1;
    } else {
        memo[v.x][v.y] = sum;
    }
    points.sort((a, b) => {
        return b.value - a.value;
    })
    points.forEach(point => {
        dfs({x: point.x, y: point.y});
    })
}

rl.on('line', (input) => {
    if (inputCount == 0) {
        [n, m] = input.split(' ').map(Number);
        tempN = n;
        memo = Array.from(Array(n), () => Array(m).fill(0));
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
    dfs({x: 0, y: 0});
    // console.log(memo[n-1][m-1]);
    console.log(memo);
    process.exit();
});