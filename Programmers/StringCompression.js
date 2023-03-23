const top = (arr) => arr[arr.length - 1];

const isCompactable = (s1, s2) => s1 !== undefined && s1.indexOf(s2) >= 0;

const stringAdd = (s1, s2) => {
  const s1Num = Number(s1.slice(0, s1.indexOf(s2)));
  return s1Num === 0 ? `2${s2}` : `${s1Num + 1}${s2}`;
};

const compact = (sliceNumber, s) => {
  const stack = [];

  while (s.length >= sliceNumber) {
    const _s = s.slice(0, sliceNumber);
    if (isCompactable(top(stack), _s)) stack.push(stringAdd(stack.pop(), _s));
    else stack.push(_s);
    s = s.slice(sliceNumber);
  }

  stack.push(s);

  return stack.join("");
};

function solution(s) {
  const sliceNumbers = [...Array(parseInt(s.length / 2)).keys()].map(
    (n) => n + 1
  );
  if (s.length === 1) return 1;
  return Math.min(
    ...sliceNumbers
      .map((sliceNumber) => compact(sliceNumber, s))
      .map((compactedStr) => compactedStr.length)
  );
}
