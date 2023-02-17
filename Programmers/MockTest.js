function* gen(arr) {
  while (true) {
    for (const a of arr) {
      yield a;
    }
  }
}

const grade = (a, b) => (a === b ? 1 : 0);

function solution(answers) {
  const firstPattern = gen([1, 2, 3, 4, 5]);
  const secondPattern = gen([2, 1, 2, 3, 2, 4, 2, 5]);
  const thirdPattern = gen([3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  let scores = [0, 0, 0];

  answers.forEach((answer) => {
    scores[0] += grade(answer, firstPattern.next().value);
    scores[1] += grade(answer, secondPattern.next().value);
    scores[2] += grade(answer, thirdPattern.next().value);
  });

  return [...scores.entries()]
    .filter(([_, score]) => score === Math.max(...scores))
    .map(([index, _]) => index + 1);
}
