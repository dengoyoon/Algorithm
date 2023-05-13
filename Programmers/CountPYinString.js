function solution(s) {
  const filteredArr = [...s.toUpperCase()].filter(
    (s) => s === "P" || s === "Y"
  );
  return filteredArr.filter((s) => s === "P").length === filteredArr.length / 2;
}
