const getXOfCircle = (y, r) => Math.sqrt(r * r - y * y);

function solution(k, d) {
  return [...Array(d + 1).keys()]
    .filter((y) => y % k === 0)
    .map((y) => parseInt(getXOfCircle(y, d)))
    .map((xLength) => 1 + parseInt(xLength / k))
    .reduce((a, b) => a + b);
}
