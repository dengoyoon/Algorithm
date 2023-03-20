const jaden = (s) =>
  s !== "" ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

function solution(s) {
  return s.split(" ").map(jaden).join(" ");
}
