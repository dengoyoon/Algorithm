const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, tempN;
const paintings = [];
let visited;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(v) {
  const queue = [v];
  let queueLength = 1;
  let idx = 0;
  let paintingArea = 1;
  visited[v.x][v.y] = 1;

  while (queueLength) {
    const out = queue[idx];
    idx += 1;
    queueLength -= 1;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [out.x + dx[i], out.y + dy[i]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      } else {
        if (paintings[nx][ny] == 1 && visited[nx][ny] == 0) {
          visited[nx][ny] = 1;
          queue.push({ x: nx, y: ny });
          paintingArea += 1;
          queueLength += 1;
        }
      }
    }
  }
  return paintingArea;
}

rl.on("line", (input) => {
  if (n == undefined) {
    [n, m] = input.split(" ").map(Number);
    tempN = n;
    visited = Array.from(Array(n), () => Array(m).fill(0));
  } else {
    tempN -= 1;
    paintings.push(input.split(" ").map(Number));
    if (tempN == 0) {
      rl.close();
    }
  }
});

rl.on("close", () => {
  let paintingCount = 0;
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (visited[i][j] == 0 && paintings[i][j] == 1) {
        const area = bfs({ x: i, y: j });
        if (maxArea < area) {
          maxArea = area;
        }
        paintingCount += 1;
      }
    }
  }
  console.log(paintingCount);
  console.log(maxArea);
  process.exit();
});
