const top = (arr) => arr[arr.length - 1];

function solution(s) {
  return [...s].reduce((acc, cur) => {
    if (top(acc) === cur) acc.pop();
    else acc.push(cur);
    return acc;
  }, []).length === 0
    ? 1
    : 0;
}
