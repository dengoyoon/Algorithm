function* genPersonNumber(n) {
  while (true) {
    for (const num of Array(n).keys()) {
      yield num + 1;
    }
  }
}

const isContinuous = (prev, cur) => prev[prev.length - 1] === cur[0];

function solution(n, words) {
  const gen = genPersonNumber(n);
  const wordMap = new Map();
  let prev = "";

  for (const [index, word] of words.entries()) {
    const personNumber = gen.next().value;

    if (wordMap.get(word) === true)
      return [personNumber, parseInt(index / n) + 1];

    wordMap.set(word, true);

    if (prev !== "" && !isContinuous(prev, word))
      return [personNumber, parseInt(index / n) + 1];

    prev = word;
  }

  return [0, 0];
}
