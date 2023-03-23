function solution(n) {
  return [...Array(n).keys()].map((x) => x + 1).filter((x) => n % x === 1)[0];
}
