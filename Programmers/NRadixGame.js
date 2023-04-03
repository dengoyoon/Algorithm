const genRadix = function* (radix) {
  let n = 0;
  while (true) {
    for (const bit of n.toString(radix).toUpperCase()) {
      yield bit;
    }
    n += 1;
  }
};

const genTurn = function* (personNumber) {
  while (true) {
    for (let i = 1; i <= personNumber; i++) {
      yield i;
    }
  }
};

function solution(n, t, m, p) {
  let ans = "";
  const radixs = genRadix(n);
  const turns = genTurn(m);
  while (ans.length < t) {
    const bit = radixs.next().value;
    const turn = turns.next().value;
    if (turn === p) {
      ans += bit;
    }
  }

  return ans;
}
