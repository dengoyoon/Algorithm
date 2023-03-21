const toBinary = (n) => {
  const res = [];
  while (n > 1) {
    res.push(n % 2);
    n = parseInt(n / 2);
  }
  return [...res, 1].reverse().join("");
};

const getOneCount = (binary) => [...binary].filter((bit) => bit === "1").length;

function solution(n) {
  const nLength = getOneCount(toBinary(n++));
  while (true) {
    if (getOneCount(toBinary(n++)) === nLength) {
      return n - 1;
    }
  }
}
