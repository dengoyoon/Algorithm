function solution(s) {
  return s
    .toUpperCase()
    .split(" ")
    .map((word) => [...word])
    .map((splitedWord) =>
      splitedWord
        .map((c) => c.charCodeAt(0))
        .map((n, index) => (index % 2 === 0 ? n : n + 32))
        .map((n) => String.fromCharCode(n))
        .join("")
    )
    .join(" ");
}
