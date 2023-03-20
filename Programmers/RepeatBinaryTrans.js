const toBinary = (num) => {
  const res = [];
  while (num > 1) {
    res.push(num % 2);
    num = parseInt(num / 2);
  }
  return [...res, 1].reverse().join("");
};

const getZeroLength = (s) => [...s].filter((c) => c === "0").length;

function solution(s) {
  let count = 0;
  let zeroCount = 0;
  while (s !== "1") {
    count += 1;
    zeroCount += getZeroLength(s);
    s = toBinary([...s].filter((c) => c !== "0").length);
  }

  return [count, zeroCount];
}
