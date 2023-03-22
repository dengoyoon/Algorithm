function solution(k, tangerines) {
  const counts = [0];
  tangerines.forEach((tangerineSize) => {
    counts[tangerineSize] = counts[tangerineSize]
      ? counts[tangerineSize] + 1
      : 1;
  });

  let acc = 0;

  for (const [index, tangerineSize] of counts
    .filter((c) => c !== null)
    .sort((a, b) => b - a)
    .entries()) {
    acc += tangerineSize;
    if (acc >= k) return index + 1;
  }
}
