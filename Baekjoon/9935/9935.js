// 문자열 폭발
// 스택, 문자열
// 다시!

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution([str, explosionStr]) {
  let result = "";
  for (const c of str) {
    result += c;
    if (result.endsWith(explosionStr)) {
      result = result.slice(0, result.length - explosionStr.length);
    }
  }
  return result === "" ? "FRULA" : result;
}

console.log(solution(input));
