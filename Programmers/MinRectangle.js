function solution(sizes) {
  const flatSizes = sizes.map((size) => size.sort((a, b) => a - b)).flat();
  return (
    Math.max(...flatSizes.filter((_, index) => index % 2 === 0)) *
    Math.max(...flatSizes.filter((_, index) => index % 2 === 1))
  );
}
