const { get } = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let visited = new Array(100001).fill(-1);

const getConnectNode = (x) => {
    return [x-1, x+1, 2*x];
}

const bfs = (x) => {
    const queue = [x];
    let queueLength = 1;
    visited[x] = 0;
    let idx = 0;
    let result = 0;
    while(queueLength) {
        const out = queue[idx];
        queueLength -= 1;
        idx += 1;
        getConnectNode(out).forEach( element => {
            if (element < 0 || element > 100000) {
                ;
            } else if (visited[element] == -1) {
                visited[element] = visited[out] + 1;
                if (element == k) {
                    result =  visited[element];
                }
                queue.push(element);
                queueLength += 1;
            }
        });
        if (result != 0) {
            break;
        }
    }
    return result;
}

rl.on('line', (input) => {
    [n, k] = input.split(' ').map(Number);
    rl.close();
});

rl.on('close', () => {
    console.log(bfs(n));
    process.exit();
});