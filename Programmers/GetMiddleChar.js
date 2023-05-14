function solution(s) {
  const isOdd = s.length % 2 !== 0;
  if (isOdd) return s[(s.length - 1) / 2];
  else return s[s.length / 2 - 1] + s[s.length / 2];
}
