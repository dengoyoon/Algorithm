// N과 M (4)
// DFS, 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([input]) {
  const [n, m] = input.split(" ").map(Number);
  const range = [...Array(n)].map((_, index) => index + 1);
  const result = [];

  function dfs(seq, num) {
    if (seq.length === m) return result.push(seq.join(" "));
    range
      .filter((i) => i >= num)
      .forEach((i) => {
        dfs([...seq, i], i);
      });
  }

  dfs([], 0);
  return result.join("\n");
}

console.log(solution(input));
