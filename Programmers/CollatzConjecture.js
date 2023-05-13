function* genCollatz(n) {
  while (true) {
    if (n % 2 === 0) yield (n = n / 2);
    else yield (n = n * 3 + 1);
  }
}

function solution(num) {
  if (num === 1) return 0;
  const collatzNum = genCollatz(num);
  for (let i = 1; i <= 500; i++) {
    if (collatzNum.next().value === 1) return i;
  }
  return -1;
}
