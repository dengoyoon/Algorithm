function solution(n, s) {
  if (n > s) return [-1];
  return Array(n)
    .fill(Math.floor(s / n))
    .map((num, index, arr) => (index < s - arr[0] * n ? num + 1 : num))
    .sort((a, b) => a - b);
}
