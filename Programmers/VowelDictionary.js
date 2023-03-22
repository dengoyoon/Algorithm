function* genVowels() {
  while (true) {
    for (const vowel of ["A", "E", "I", "O", "U"]) {
      yield vowel;
    }
  }
}

const top = (arr) => arr[arr.length - 1];

function solution(word) {
  const generators = [
    genVowels(),
    genVowels(),
    genVowels(),
    genVowels(),
    genVowels(),
  ];
  const answer = [generators[0].next().value];
  let count = 1;

  while (answer.join("") !== word) {
    count += 1;
    if (answer.length <= 4) {
      answer.push(generators[answer.length].next().value);
    } else {
      while (top(answer) === "U") {
        answer.pop();
      }
      answer[answer.length - 1] = generators[answer.length - 1].next().value;
    }
  }
  return count;
}
