const toThreeWay = (n) => {
  const res = [];
  while (n > 3) {
    if (n % 3 === 0) {
      res.push(3);
      n = parseInt(n / 3) - 1;
    } else {
      res.push(n % 3);
      n = parseInt(n / 3);
    }
  }

  return [...res, n].reverse().join("");
};

function solution(n) {
  return toThreeWay(n).replaceAll("3", "4");
}
