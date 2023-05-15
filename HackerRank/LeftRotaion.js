function rotateLeft(d, arr) {
  const iter = arr[Symbol.iterator]();
  const res = [];
  for (let i = 0; i < d; i++) {
    res.push(iter.next().value);
  }
  return [...iter, ...res];
}
