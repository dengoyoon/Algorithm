function* gen(binary) {
  for (const bit of binary) {
    yield bit;
  }
  while (true) {
    yield "0";
  }
}

// binary1 < binary2
const getDiffCount = (binary1, binary2) => {
  const genBinary = gen(binary1);
  let diffCount = 0;

  for (const bit of binary2) {
    if (bit !== genBinary.next().value) diffCount += 1;
    if (diffCount >= 3) return 3;
  }
  return diffCount;
};

const getNumberDiffUnderTwo = (number, reversedBinaryMemo, answerMemo) => {
  if (answerMemo[number]) return answerMemo[number];
  if (!reversedBinaryMemo[number]) {
    reversedBinaryMemo[number] = [...number.toString(2)].reverse().join("");
  }
  const basisNumber = number;
  const basisBinary = reversedBinaryMemo[number];

  while (true) {
    number += 1;
    if (!reversedBinaryMemo[number]) {
      reversedBinaryMemo[number] = [...number.toString(2)].reverse().join("");
    }
    if (getDiffCount(basisBinary, reversedBinaryMemo[number]) <= 2) {
      answerMemo[basisNumber] = number;
      return number;
    }
  }
};

function solution(numbers) {
  const reversedBinaryMemo = [];
  const answerMemo = [];
  return numbers.map((number) =>
    getNumberDiffUnderTwo(number, reversedBinaryMemo, answerMemo)
  );
}
