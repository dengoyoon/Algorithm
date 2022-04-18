const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let row, col;
let tempN;
let graph;
let tomatoBox = [];
let startTomatoArray = [];
let visited;
let periodArray;
let emptyCount = 0;
let count = 0;
let max = 0;

const bfs = (vArr) => {
    let queue = Array.from(vArr);
    let queueLength = 0;
    let idx = 0;
    vArr.forEach(v => {
        visited[v.x][v.y] = true;
        periodArray[v.x][v.y] = 1;
    })
    queueLength = queue.length;
    while(queueLength) {
        let out = queue[idx];
        idx += 1;
        queueLength -= 1;
        graph[out.x][out.y].forEach( element => {
            if(!visited[element.x][element.y]) {
                if (periodArray[element.x][element.y] == 0 || periodArray[element.x][element.y] > periodArray[out.x][out.y] + 1) {
                    periodArray[element.x][element.y] = periodArray[out.x][out.y] + 1;
                }
                visited[element.x][element.y] = true;
                queue.push(element);
                queueLength += 1;
            }
        });
    }
}

rl.on('line', (input) => {
    if(inputCount == 2) {
        [col, row] = input.split(' ').map(Number);
        tempN = row;
        graph = Array.from(Array(row+2), () => new Array(col+2));
        for(let i = 0 ; i < row + 2 ; i++) {
            for(let j = 0 ; j < col + 2 ; j++){
                graph[i][j] = [];
            }
        }
        visited = Array.from(Array(row+2), () => Array(col+2).fill(false));
        periodArray = Array.from(Array(row+2), () => Array(col+2).fill(0));
        tomatoBox.push(new Array(col+2).fill(-1));
        inputCount -= 1;
    } else {
        tempN -= 1;
        const tempInput = `-1 ${input} -1`;
        tomatoBox.push(tempInput.split(' ').map(Number));
        if(tempN == 0) {
            tomatoBox.push(new Array(col+2).fill(-1));
            rl.close();
        }
    }
    
});

rl.on('close', () => {
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            if(tomatoBox[i][j] == 1){
                startTomatoArray.push({x: i, y: j});
            }
            if(tomatoBox[i][j] == -1){
                emptyCount += 1;
            }
        }
    }
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            if(tomatoBox[i][j] == 1 || tomatoBox[i][j] == 0){
                if (tomatoBox[i-1][j] == 1 || tomatoBox[i-1][j] == 0) {
                    graph[i][j].push({x: i-1, y: j});
                }
                if (tomatoBox[i+1][j] == 1 || tomatoBox[i+1][j] == 0) {
                    graph[i][j].push({x: i+1, y: j});
                }
                if (tomatoBox[i][j-1] == 1 || tomatoBox[i][j-1] == 0) {
                    graph[i][j].push({x: i, y: j-1});
                }
                if (tomatoBox[i][j+1] == 1 || tomatoBox[i][j+1] == 0) {
                    graph[i][j].push({x: i, y: j+1});
                }
            }
        }
    }

    bfs(startTomatoArray);
    
    for(let i = 1 ; i < row + 1 ; i++) {
        for(let j = 1 ; j < col + 1 ; j++){
            if(periodArray[i][j] != 0) {
                count += 1;
            }
            if(max < periodArray[i][j]) {
                max = periodArray[i][j];
            }
        }
    }

    if (count != row*col - emptyCount) {
        console.log(-1);
    } else {
        console.log(max-1);
    }


    process.exit();
});