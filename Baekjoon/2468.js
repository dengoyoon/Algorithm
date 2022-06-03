const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, tempN;
const rainMap = [];
let visited;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (v, height) => {
    if (visited[v.x][v.y]) {
        return 0;
    } else {
        const queue = [v];
        let queueLength = 1;
        let idx = 0;
        visited[v.x][v.y] = true;
        while(queueLength) {
            const out = queue[idx];
            idx += 1;
            queueLength -= 1;
            for (let i = 0 ; i < 4 ; i++) {
                const [nx, ny] = [out.x + dx[i], out.y + dy[i]];
                if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
                    continue;
                } else {
                    if (rainMap[nx][ny] > height && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        queue.push({x: nx, y: ny});
                        queueLength += 1;
                    }
                }
            }
        }
        return 1;
    }
}

rl.on('line', (input) => {
    if (n == undefined) {
        n = parseInt(input);
        tempN = n;
    } else {
        tempN -= 1;
        rainMap.push(input.split(' ').map(Number));
        if (tempN == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    let height = 0;
    let result = 0;
    const safetyArea = [];
    while(true) {
        visited = Array.from(Array(n), () => Array(n).fill(false));
        for (let i  = 0 ; i < n ; i++) {
            for (let j = 0 ; j < n ; j++) {
                if(rainMap[i][j] > height) {
                    result += bfs({x: i, y: j}, height);
                }
            }
        }
        if(result == 0) {
            break;
        } else {
            safetyArea.push(result);
            height += 1;
            result = 0;
        }
    }
    // console.log(safetyArea);
    console.log(Math.max(...safetyArea));
    process.exit();
});