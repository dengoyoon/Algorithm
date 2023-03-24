const top = (arr) => arr[arr.length - 1];

function solution(number, k) {
  const stack = [];
  const deleteStack = [];
  const iter = number[Symbol.iterator]();
  let cur;

  while (!(cur = iter.next()).done) {
    const n = cur.value;
    while (top(stack) !== undefined && top(stack) < n) {
      deleteStack.push(stack.pop());
      if (deleteStack.length === k) return [...stack, n, ...iter].join("");
    }
    stack.push(n);
  }
  return number.slice(0, number.length - k);
}
