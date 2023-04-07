function solution(citations) {
  // return [...Array(Math.max(...citations) + 1).keys()]
  //     .reverse()
  //     .find(h =>
  //         )

  return (
    citations
      .sort((a, b) => b - a)
      .findIndex((h, index) => {
        index = citations.length - index - 1;
        return index + 1 <= h && h <= citations.length - index;
      }) + 1
  );
}
