const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let row, col, h;
let graph; // 안익은 토마토, 익은 토마토들이 연결되는 그래프를 구현하기 위한 배열
let tomatoBox = []; // 토마토의 위치가 기록되는 배열
let startTomatoArray = []; // 익은 토마토의 좌표들이 들어가는 배열, BFS에 들어감
let periodArray; // BFS를 순회하며 토마토가 익는 날짜를 기록하는 배열
let emptyCount = 0;
let visited; // 방문한 좌표를 다시 방문하지 않기 위한 배열
let count = 0;
let max = 0;

let x = 0;
let y = 0;
let z = 0;

const bfs = (vArr) => {
    let queue = Array.from(vArr);
    let queueLength = 0;
    let idx = 0;
    vArr.forEach(v => {
        periodArray[v.x][v.y][v.z] = 1;
        visited[v.x][v.y][v.z] = true
    })
    queueLength = queue.length
    while(queueLength) {
        let out = queue[idx];
        idx += 1;
        queueLength -= 1;
        graph[out.x][out.y][out.z].forEach( element => {
            if(!visited[element.x][element.y][element.z]) {
                if (periodArray[element.x][element.y][element.z] == 0 || periodArray[element.x][element.y][element.z] > periodArray[out.x][out.y][out.z] + 1) {
                    periodArray[element.x][element.y][element.z] = periodArray[out.x][out.y][out.z] + 1;
                }
                queue.push(element);
                queueLength += 1;
                visited[element.x][element.y][element.z] = true;
            }
        });
    }
}

rl.on('line', (input) => {
    if(inputCount == 2) {
        [col, row, h] = input.split(' ').map(Number);
        graph = Array.from(Array(row), () => Array.from(Array(col), () => Array(h).fill(0)));
        for(let i = 0 ; i < row ; i++) {
            for(let j = 0 ; j < col ; j++){
                for(let k = 0 ; k < h ; k++){
                    graph[i][j][k] = [];
                }
            }
        }
        visited = Array.from(Array(row), () => Array.from(Array(col), () => Array(h).fill(false)));
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
    for(let i  = 0 ; i < row ; i++) {
        for(let j  = 0 ; j < col ; j++){
            for(let k  = 0 ; k < h ; k++){
                if(tomatoBox[i][j][k] == 1 || tomatoBox[i][j][k] == 0){
                    if (i != 0) {
                        if (tomatoBox[i-1][j][k] == 1 || tomatoBox[i-1][j][k] == 0) {
                            graph[i][j][k].push({x: i-1, y: j, z: k});
                        }
                    }
                    if (i != row-1) {
                        if (tomatoBox[i+1][j][k] == 1 || tomatoBox[i+1][j][k] == 0) {
                            graph[i][j][k].push({x: i+1, y: j, z: k});
                        }
                    }
                    if (j != 0) {
                        if (tomatoBox[i][j-1][k] == 1 || tomatoBox[i][j-1][k] == 0) {
                            graph[i][j][k].push({x: i, y: j-1, z: k});
                        }
                    }
                    if (j != col-1) {
                        if (tomatoBox[i][j+1][k] == 1 || tomatoBox[i][j+1][k] == 0) {
                            graph[i][j][k].push({x: i, y: j+1, z: k});
                        }
                    }
                    if (k != 0) {
                        if (tomatoBox[i][j][k-1] == 1 || tomatoBox[i][j][k-1] == 0) {
                            graph[i][j][k].push({x: i, y: j, z: k-1});
                        }
                    }
                    if (k != h-1) {
                        if (tomatoBox[i][j][k+1] == 1 || tomatoBox[i][j][k+1] == 0) {
                            graph[i][j][k].push({x: i, y: j, z: k+1});
                        }
                    }
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