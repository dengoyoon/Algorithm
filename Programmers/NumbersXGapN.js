function solution(x, n) {
  return [...Array(n).keys()].map((n) => n + 1).map((n) => n * x);
}
