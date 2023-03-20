function solution(s) {
  return s
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .filter((_, index, arr) => index === 0 || index === arr.length - 1)
    .join(" ");
}
