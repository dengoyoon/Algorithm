const top = (arr) => arr[arr.length - 1];

function solution(arr) {
  return arr.slice(1).reduce(
    (acc, cur) => {
      if (top(acc) !== cur) acc.push(cur);
      return acc;
    },
    [arr[0]]
  );
}
