const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let row, col, h;
let tomatoBox = []; // 토마토의 위치가 기록되는 배열
let startTomatoArray = []; // 익은 토마토의 좌표들이 들어가는 배열, BFS에 들어감
let periodArray; // BFS를 순회하며 토마토가 익는 날짜를 기록하는 배열
let emptyCount = 0;
let count = 0;
let max = 0;

let x = 0;
let y = 0;
let z = 0;

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

const bfs = (vArr) => {
    let queue = Array.from(vArr);
    let queueLength = 0;
    let idx = 0;
    vArr.forEach(v => {
        periodArray[v.x][v.y][v.z] = 1;
    })
    queueLength = queue.length
    while(queueLength) {
        let out = queue[idx];
        idx += 1;
        queueLength -= 1;
        for (let i = 0 ; i < 6 ; i++) {
            const [nx, ny, nz] = [out.x + dx[i], out.y + dy[i], out.z + dz[i]];
            if (nx < 0 || nx >= row || ny < 0 || ny >= col || nz < 0 || nz >= h) {
                continue;
            }
            if ((tomatoBox[nx][ny][nz] == 1 || tomatoBox[nx][ny][nz] == 0) && periodArray[nx][ny][nz] == 0) {
                periodArray[nx][ny][nz] = periodArray[out.x][out.y][out.z] + 1;
                queue.push({x: nx, y: ny, z: nz});
                queueLength += 1;
            }
        }
    }
}

rl.on('line', (input) => {
    if(inputCount == 2) {
        [col, row, h] = input.split(' ').map(Number);
        periodArray = Array.from(Array(row), () => Array.from(Array(col), () => Array(h).fill(0)));
        tomatoBox = Array.from(Array(row), () => Array.from(Array(col), () => Array(h).fill(-1)));
        inputCount -= 1;
    } else {
        input.split(' ').map(Number).forEach( element => {
            tomatoBox[x][y][z] = element;
            y += 1;
        });
        y = 0;
        x += 1;
        if (x == row) {
            x = 0;
            z += 1;
        }
        if(z == h) {
            rl.close();
        }
    }
    
});

rl.on('close', () => {
    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col ; j++){
            for(let k = 0 ; k < h ; k++){
                if(tomatoBox[i][j][k] == 1){
                    startTomatoArray.push({x: i, y: j, z: k});
                }
                if(tomatoBox[i][j][k] == -1){
                    emptyCount += 1;
                }
            }
        }
    }
    

    bfs(startTomatoArray);
    
    for(let i = 0 ; i < row ; i++) {
        for(let j = 0 ; j < col ; j++){
            for(let k = 0 ; k < h ; k++){
                if(periodArray[i][j][k] != 0) {
                    count += 1;
                }
                if(max < periodArray[i][j][k]) {
                    max = periodArray[i][j][k];
                }
            }
        }
    }

    if (count != row*col*h - emptyCount) {
        console.log(-1);
    } else {
        console.log(max-1);
    }

    process.exit();
});