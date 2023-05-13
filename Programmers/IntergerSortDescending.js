function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b.localeCompare(a))
      .join("")
  );
}
