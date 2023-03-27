const top = (arr) => arr[arr.length - 1];

function solution(numbers) {
  const stack = [];
  const answer = [...Array(numbers.length).fill(-1)];

  for (const [index, n] of Object.entries(numbers)) {
    if (top(stack) === undefined || top(stack)[1] >= n) {
      stack.push([index, n]);
    } else {
      while (top(stack) !== undefined && top(stack)[1] < n) {
        const popIndex = stack.pop()[0];
        answer[popIndex] = n;
      }
      stack.push([index, n]);
    }
  }

  return answer;
}
