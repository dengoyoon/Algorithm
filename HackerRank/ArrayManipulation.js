function* genQueries(queries) {
  for (let [i, j, k] of queries) {
    while (i <= j) {
      yield [i++, k];
    }
  }
}

function arrayManipulation(n, queries) {
  const arr = Array(n + 1).fill(0);
  for (const [i, k] of genQueries(queries)) {
    arr[i] += k;
  }
  return Math.max(...arr);
}
