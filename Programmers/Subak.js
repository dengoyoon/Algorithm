function* genArray(arr) {
  while (true) {
    for (const a of arr) {
      yield a;
    }
  }
}

function solution(n) {
  const subak = genArray(["수", "박"]);
  let ans = "";
  while (n--) {
    ans += subak.next().value;
  }
  return ans;
}
