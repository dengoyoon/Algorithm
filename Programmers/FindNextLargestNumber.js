const top = (arr) => arr[arr.length - 1];

function solution(numbers) {
  const stack = [];
  let popCount = 0;
  let popIndex = 0;

  for (const n of numbers) {
    if (top(stack) === undefined || top(stack) >= n) {
      stack.push(n);
    } else {
      while (top(stack) < n && stack.length > popIndex) {
        popCount += 1;
        stack.pop();
      }
      stack.push(...Array(popCount + 1).fill(n));
      popIndex = stack.length - 1;
      popCount = 0;
    }
  }

  return stack.map((stackNum, index) =>
    stackNum == numbers[index] ? -1 : stackNum
  );
}
