const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 2;
let t;
const graph = [];
const visited = [];
let v, e;
let tempE;
let infoMode = 1;
let graphCount = 0;

const bfs = (v, t) => {
    const queue = [v];
    let queueLength = 1;
    let idx = 0;
    if (visited[t][v] != 0) {
        queueLength = 0;
    } else {
        visited[t][v] = 1;
    }
    let result = 1;
    while(queueLength) {
        const out = queue[idx];
        idx += 1;
        queueLength -= 1;
        graph[t][out].forEach(element => {
            if(visited[t][element] == 0) {
                visited[t][element] = visited[t][out] + 1;
                queue.push(element);
                queueLength += 1;
            } else {
                if (visited[t][element] % 2 == visited[t][out] % 2) {
                    result = 0;
                }
            }
        })
        if (result != 1) {
            break;
        }
    }
    return result;
}

rl.on('line', (input) => {
    if (inputCount == 2) {
        t = parseInt(input);
        inputCount -= 1;
    } else {
        if (infoMode == 1) {
            [v, e] = input.split(' ').map(Number);
            visited.push(new Array(v + 1).fill(0));
            let tempGraph = new Array(v + 1);
            for (let i = 0 ; i < v+1 ; i++) {
                tempGraph[i] = [];
            }
            graph.push(tempGraph);
            tempE = e;
            infoMode = 0;
        } else {
            tempE -= 1;
            const [_s, _e] = input.split(' ').map(Number);
            graph[graphCount][_s].push(_e);
            graph[graphCount][_e].push(_s);
            if (tempE == 0) {
                t -= 1;
                graphCount += 1;
                infoMode = 1;
            }
        }
        if (t == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    for (let testCase = 0 ; testCase < graphCount ; testCase++) {
        let count = 0;
        for (let i = 1 ; i <= visited[testCase].length ; i++) {
            count += bfs(i, testCase)
        }
        if (count == visited[testCase].length) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
    process.exit();
});