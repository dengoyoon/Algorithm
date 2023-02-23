const calculateBorderRect = (row, col) => 2 * (row + col) + 4;

function solution(brown, yellow) {
  return [...Array(Math.floor(yellow)).keys()]
    .map((n) => n + 1)
    .filter((n) => yellow % n === 0)
    .map((n) => [n, yellow / n])
    .filter(([row, col]) => row >= col)
    .filter(([row, col]) => calculateBorderRect(row, col) === brown)
    .reduce((rect) => rect)
    .map((side) => side + 2);
}
