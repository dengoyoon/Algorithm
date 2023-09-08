// 연산자 끼워넣기
// DFS, 백트래킹, 완전탐색

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const calculateByOperator = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => ~~(a / b),
};

function solution([T, numbers, numberByOperator]) {
  numbers = numbers.split(" ").map(Number);
  const operators = numberByOperator
    .split(" ")
    .flatMap((n, index) => Array(Number(n)).fill(index))
    .map((operator, index) => [operator, index]);
  const visited = Array(T - 1).fill(false);
  let [max, min] = [-Infinity, Infinity];

  function dfs(newOps) {
    if (newOps.length === T - 1) {
      const result = numbers.reduce(
        (acc, cur, index) =>
          calculateByOperator[[0, ...newOps][index]](acc, cur),
        0
      );
      if (max < result) max = result;
      if (min > result) min = result;
    }
    return operators
      .filter(([, index]) => visited[index] === false)
      .forEach(([operator, index]) => {
        visited[index] = true;
        dfs([...newOps, operator]);
        visited[index] = false;
      });
  }

  dfs([]);
  return [max, min].join("\n");
}

console.log(solution(input));
