function solution(numbers) {
  if (numbers.reduce((a, b) => a + b) === 0) return "0";
  return numbers
    .map((a) => String(a))
    .sort((a, b) => (a + b < b + a ? 1 : -1))
    .join("");
}
