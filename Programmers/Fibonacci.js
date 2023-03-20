function solution(n) {
  const memo = [...Array(100001).fill(undefined)];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }
  return memo[n] % 1234567;
}
