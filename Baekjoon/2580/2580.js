// 스도쿠
// DFS, 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function getFillableNumbers(i, j, board) {
  const fillableChecks = Array(10).fill(false);
  for (let k = 0; k < 9; k++) {
    fillableChecks[board[i][k]] = true;
    fillableChecks[board[k][j]] = true;
  }
  const [iRange, jRange] = [i, j].map((n) => {
    if (n < 3) return [0, 1, 2];
    if (n < 6) return [3, 4, 5];
    return [6, 7, 8];
  });

  for (const i of iRange) {
    for (const j of jRange) {
      fillableChecks[board[i][j]] = true;
    }
  }
  return fillableChecks
    .map((check, index) => [check, index])
    .filter(([check]) => check === false)
    .map(([, num]) => num);
}

const paint = (board) => board.map((line) => line.join(" ")).join("\n");

function solution([...input]) {
  const board = input.map((line) => line.split(" ").map(Number));
  const emptyPoint = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) emptyPoint.push([i, j]);
    }
  }

  function dfs(count) {
    if (count === emptyPoint.length) {
      console.log(paint(board));
      process.exit(0);
    }
    const [i, j] = emptyPoint[count];
    for (const num of getFillableNumbers(i, j, board)) {
      board[i][j] = num;
      dfs(count + 1);
      board[i][j] = 0;
    }
  }
  dfs(0);
}

solution(input);
