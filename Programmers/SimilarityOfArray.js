function solution(s1, s2) {
  [s1, s2] = [new Set(s1), new Set(s2)];
  return new Set([...s1].filter((a) => s2.has(a))).size;
}
