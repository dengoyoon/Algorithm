const isPrime = (number) =>
  [...Array(Math.floor(Math.sqrt(number)) + 1).keys()]
    .slice(2)
    .filter((v) => number % v === 0).length === 0;

function solution(numbers) {
  const numberObjects = [
    ...[...numbers].map((value, index) => ({ value, index })),
  ];

  return new Set(
    [...Array(numbers.length - 1).keys()]
      .reduce(
        (acc, _) =>
          acc
            .map((objArray) => [
              objArray,
              ...numberObjects
                .filter(
                  (appendObj) =>
                    !objArray.find((obj) => obj.index === appendObj.index)
                )
                .map((appendObj) => [...objArray, appendObj]),
            ])
            .flat(),
        [...numberObjects.map((obj) => [obj])]
      )
      .map((objArray) => objArray.map(({ value }) => value).join(""))
      .map(Number)
      .filter((n) => n > 1)
      .filter(isPrime)
  ).size;
}
