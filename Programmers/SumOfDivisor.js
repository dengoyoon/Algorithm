function solution(n) {
  const result = [];
  [...Array(parseInt(Math.sqrt(n))).keys()]
    .map((x) => x + 1)
    .forEach((x) => {
      if (n % x === 0) result.push(new Set([x, n / x]));
    });
  return n <= 1
    ? n
    : result
        .map((s) => [...s])
        .flat()
        .reduce((a, b) => a + b);
}
