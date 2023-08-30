// N-Queen
// DFS, 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const checkPlaceable = (chessBoard, newCol) => {
  const newRow = chessBoard.length;
  return chessBoard.every((col, row) => {
    if (newCol === col) return false;
    if (Math.abs(newCol - col) === Math.abs(newRow - row)) return false;
    else return true;
  });
};

function solution([input]) {
  const N = Number(input);
  const cols = [...Array(N)].map((_, index) => index);

  function dfs(chessBoard) {
    if (chessBoard.length === N) return 1;
    return cols
      .filter((col) => checkPlaceable(chessBoard, col))
      .reduce((acc, col) => acc + dfs([...chessBoard, col]), 0);
  }

  return dfs([]);
}

console.log(solution(input));
