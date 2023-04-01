const initDict = (arr) => {
  for (let i = 1; i <= 26; i++) {
    arr[i] = String.fromCharCode(i + 64);
  }
  return new Map(arr.map((a, index) => [a, index]));
};

const nextWord = function* (msg, index) {
  let word = "";
  while (index < msg.length) {
    word += msg[index++];
    yield word;
  }
};

function solution(msg) {
  const dict = initDict([""]);
  const result = [];
  let nextIndex = 27;
  let word;
  let genNextWord;

  for (let i = 0; i < msg.length; i++) {
    genNextWord = nextWord(msg, i);
    word = genNextWord.next().value;
    let count = 0;
    let findIndex = 0;
    while (dict.get(word) !== undefined) {
      count += 1;
      findIndex = dict.get(word);
      word = genNextWord.next().value;
    }
    i += count - 1;
    result.push(findIndex);
    dict.set(word, nextIndex++);
  }

  return result;
}
