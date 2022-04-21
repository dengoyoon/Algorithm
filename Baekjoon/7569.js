const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let row, col, h;
let graph;
let tomatoBox = [];
let startTomatoArray = [];
let periodArray;
let emptyCount = 0;
let count = 0;
let max = 0;

let x = 1;
let y = 1;
let z = 1;

const bfs = (vArr) => {
    let queue = Array.from(vArr);
    let idx = 0;
    vArr.forEach(v => {
        periodArray[v.x][v.y][v.z] = 1;
    })
    while(queue.length) {
        let out = queue[idx];
        idx += 1;
        graph[out.x][out.y][out.z].forEach( element => {
            if(!periodArray[element.x][element.y][element.z]) {
                if (periodArray[element.x][element.y][element.z] == 0 || periodArray[element.x][element.y][element.z] > periodArray[out.x][out.y][out.z] + 1) {
                    periodArray[element.x][element.y][element.z] = periodArray[out.x][out.y][out.z] + 1;
                }
                queue.push(element);
            }
        });
    }
}

rl.on('line', (input) => {
    if(inputCount == 2) {
        [col, row, h] = input.split(' ').map(Number);
        graph = Array.from(Array(row+1), () => Array.from(Array(col+1), () => Array(h+1).fill(0)));
        for(let i = 0 ; i < row + 1 ; i++) {
            for(let j = 0 ; j < col + 1 ; j++){
                for(let k = 0 ; k < h + 1 ; k++){
                    graph[i][j][k] = [];
                }
            }
        }
        periodArray = Array.from(Array(row+2), () => Array.from(Array(col+2), () => Array(h+2).fill(0)));
        tomatoBox = Array.from(Array(row+2), () => Array.from(Array(col+2), () => Array(h+2).fill(-1)));
        inputCount -= 1;
    } else {
        input.split(' ').map(Number).forEach( element => {
            tomatoBox[x][y][z] = element;
            y += 1;
        });
        y = 1;
        x += 1;
        if (x == row+1) {
            x = 1;
            z += 1;
        }
        if(z == h+1) {
            rl.close();
        }
    }
    
});

rl.on('close', () => {
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            for(let k = 1 ; k < h + 1 ; k++){
                if(tomatoBox[i][j][k] == 1){
                    startTomatoArray.push({x: i, y: j, z: k});
                }
                if(tomatoBox[i][j][k] == -1){
                    emptyCount += 1;
                }
            }
        }
    }
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            for(let k = 1 ; k < h + 1 ; k++){
                if(tomatoBox[i][j][k] == 1 || tomatoBox[i][j][k] == 0){
                    if (tomatoBox[i-1][j][k] == 1 || tomatoBox[i-1][j][k] == 0) {
                        graph[i][j][k].push({x: i-1, y: j, z: k});
                    }
                    if (tomatoBox[i+1][j][k] == 1 || tomatoBox[i+1][j][k] == 0) {
                        graph[i][j][k].push({x: i+1, y: j, z: k});
                    }
                    if (tomatoBox[i][j-1][k] == 1 || tomatoBox[i][j-1][k] == 0) {
                        graph[i][j][k].push({x: i, y: j-1, z: k});
                    }
                    if (tomatoBox[i][j+1][k] == 1 || tomatoBox[i][j+1][k] == 0) {
                        graph[i][j][k].push({x: i, y: j+1, z: k});
                    }
                    if (tomatoBox[i][j][k-1] == 1 || tomatoBox[i][j][k-1] == 0) {
                        graph[i][j][k].push({x: i, y: j, z: k-1});
                    }
                    if (tomatoBox[i][j][k+1] == 1 || tomatoBox[i][j][k+1] == 0) {
                        graph[i][j][k].push({x: i, y: j, z: k+1});
                    }
                }
            }
        }
    }

    bfs(startTomatoArray);
    
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            for(let k = 1 ; k < h + 1 ; k++){
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