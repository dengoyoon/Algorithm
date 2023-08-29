// N과 M (2)
// DFS, 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([input]) {
  const [n, m] = input.split(" ").map(Number);
  const range = [...Array(n)].map((_, index) => index + 1);
  const visited = Array(n + 1).fill(false);
  const result = [];

  function dfs(seq, num) {
    if (seq.length === m) return result.push(seq.join(" "));
    range
      .filter((i) => visited[i] === false)
      .filter((i) => i > num)
      .forEach((i) => {
        visited[i] = true;
        dfs([...seq, i], i);
        visited[i] = false;
      });
  }

  dfs([], 0);
  return result.join("\n");
}

console.log(solution(input));
