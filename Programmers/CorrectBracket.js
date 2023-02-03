const top = (arr) => arr[arr.length - 1];
const isEmpty = (arr) => arr.length === 0;

const isPair = (left, right) => left === "(" && right === ")";

function solution(s) {
  s = [...s];
  return isEmpty(
    s.reduce((acc, cur, index) => {
      if (isEmpty(acc)) acc.push(cur);
      else if (isPair(top(acc), cur)) acc.pop();
      else acc.push(cur);

      return acc;
    }, [])
  );
}
