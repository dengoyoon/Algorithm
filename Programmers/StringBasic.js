function solution(s) {
  return (
    (s.length === 4 || s.length === 6) &&
    [...s].every((x) => "0" <= x && x <= "9")
  );
}
