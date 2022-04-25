const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let rowCount;
let inputCount = 2;
let wallMap = [];
let visited;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let min = Number.MAX_VALUE;

const bfs = (v) => {
    const queue = [v];
    let queueLength = 1;
    let idx = 0;
    visited[v.x][v.y][v.wall] = 1;
    while(queueLength) {
        const out = queue[idx];
        idx += 1;
        queueLength -= 1;
        for (let i = 0 ; i < 4 ; i++) {
            const [nx, ny, nWall] = [out.x + dx[i], out.y + dy[i], out.wall];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                continue;
            } else {
                if (nWall == 0) {
                    if (wallMap[nx][ny] == 0 && visited[nx][ny][0] == 0) {
                        // 벽이 없고 방문한적이 없을 때
                        visited[nx][ny][0] = visited[out.x][out.y][0] + 1;
                        queue.push({x: nx, y: ny, wall: 0});
                        queueLength += 1;
                    }
                    if (wallMap[nx][ny] == 1 && visited[nx][ny][1] == 0) {
                        // 벽이지만 부술 수 있을때, 그 벽을 방문한적 없을때
                        visited[nx][ny][1] = visited[out.x][out.y][0] + 1;
                        queue.push({x: nx, y: ny, wall: 1});
                        queueLength += 1;
                    }
                } else {
                    if (wallMap[nx][ny] == 0 && visited[nx][ny][1] == 0) {
                        // 벽이 없고 방문한적이 없을 때
                        visited[nx][ny][1] = visited[out.x][out.y][1] + 1;
                        queue.push({x: nx, y: ny, wall: 1});
                        queueLength += 1;
                    }
                }
            }
        }
    }
    const [breakDistance, cleanDistance] = [visited[n-1][m-1][1], visited[n-1][m-1][0]];
    let result;
    if (breakDistance < cleanDistance) {
        result = breakDistance;
    } else {
        result = cleanDistance;
    }
    if (breakDistance == 0) {
        result = cleanDistance;
    }
    if (cleanDistance == 0) {
        result = breakDistance;
    }
    if (cleanDistance + breakDistance == 0) {
        result = -1;
    }
    
    return result;
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        [n, m] = input.split(' ').map(Number);
        visited = Array.from(Array(n), ()=> Array.from(Array(m), () => Array(2).fill(0)));
        rowCount = n;
        inputCount -= 1;
    } else {
        rowCount -= 1;
        wallMap.push(input.split('').map(Number));
        if (rowCount == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {

    const result = bfs({x: 0, y: 0, wall: 0});
    
    console.log(result);

    process.exit();
});