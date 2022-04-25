const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let inputChessCnt = 3;
let testCase;
const startPoint = [];
const endPoint = [];
const chessLength = [];
const answer = [];
let chessBoard;
let visited;
const dx = [1, 2, 2, 1, -1, -2, -2, -1];
const dy = [2, 1, -1, -2, -2, -1, 1, 2];

const bfs = (startP, endP, N) => {
    const queue = [startP];
    let queueLength = 1;
    let idx = 0;
    let result = 0;
    visited[startP.x][startP.y] = 1;
    while(queueLength) {
        const out = queue[idx];
        idx += 1;
        queueLength -= 1;
        for(let i = 0 ; i < 8 ; i++) {
            const [nx, ny] = [out.x + dx[i], out.y + dy[i]];
            if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
                continue;
            } else {
                if (visited[nx][ny] == 0) {
                    visited[nx][ny] = visited[out.x][out.y] + 1;
                    if (nx == endP.x && ny == endP.y) {
                        result = visited[nx][ny];
                        break;
                    }
                    queue.push({x: nx, y: ny});
                    queueLength += 1;
                }
            }
        }
        if (result != 0) {
            break;
        }
    }
    return result;
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        testCase = parseInt(input);
        inputCount -= 1;
    } else {
        if (inputChessCnt == 3) {
            chessLength.push(parseInt(input));
        } else if (inputChessCnt == 2) {
            const [_x, _y] = input.split(' ').map(Number);
            startPoint.push({x: _x, y: _y});
        } else if (inputChessCnt == 1) {
            const [_x, _y] = input.split(' ').map(Number);
            endPoint.push({x: _x, y: _y});
            inputChessCnt = 4;
            testCase -= 1;
        }

        inputChessCnt -= 1;

        if (testCase == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    chessLength.forEach( (N, index) => {
        chessBoard = Array.from(Array(N), () => Array(N).fill(0));
        visited = Array.from(Array(N), () => Array(N).fill(0));

        if (startPoint[index].x == endPoint[index].x && startPoint[index].y == endPoint[index].y) {
            answer.push(0);
        } else {
            answer.push(bfs(startPoint[index], endPoint[index], N) - 1);
        }
        
    })
    answer.forEach( e => {
        console.log(e);
    })
    process.exit();
});