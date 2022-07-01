const bfs = (v, visited, computers) => {
    const queue = [v];
    let queueLength = 1;
    let idx = 0;
    visited[v] = true;
    
    while (queueLength) {
        const out = queue[idx];
        idx += 1;
        queueLength -= 1;
        computers[out].forEach((computer, index) => {
            if (visited[index] === false && computer === 1) {
                visited[out] = true;
                queue.push(index);
                queueLength += 1;
            }
        })
        
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    for (let i = 0 ; i < n ; i++) {
        if (visited[i] === false) {
            answer += 1;
            bfs(i, visited, computers);
        }
    }
    return answer;
}