// 문자열
// 문자열

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([T, ...strs]) {
  return strs.map((str) => str[0] + str[str.length - 1]).join("\n");
}

console.log(solution(input));
