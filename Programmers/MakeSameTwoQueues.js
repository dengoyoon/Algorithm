const findIndexGoalSum = (queue, goalSum) => {
  let sum = 0;

  for (const [index, a] of queue) {
    sum += a;
    if (sum === goalSum) return index;
    else if (sum > goalSum) return -1;
  }
};

const shiftLeftQueue = (queue) => [...queue.slice(1, queue.length), queue[0]];

const getSliceIndexes = (queue1, queue2, goalSum) => {
  let queue = [...[...queue1, ...queue2].entries()];

  for (let i = 0; i <= queue.length; i++) {
    const index = findIndexGoalSum(queue, goalSum);
    if (index !== -1) return [index, queue[queue.length - 1][0]];
    queue = shiftLeftQueue(queue);
  }

  return undefined;
};

function solution(queue1, queue2) {
  const allSum = [...queue1, ...queue2].reduce((a, b) => a + b);
  if (allSum % 2 === 1) return -1;

  const sliceIndexes = getSliceIndexes(queue1, queue2, allSum / 2);
  if (!sliceIndexes) return -1;

  const [firstIndex, secondIndex] = sliceIndexes;

  if (firstIndex < queue1.length && secondIndex < queue1.length) {
    return firstIndex + secondIndex + 2 + queue1.length;
  } else if (firstIndex >= queue1.length && secondIndex >= queue1.length) {
    return firstIndex + secondIndex + 2 - queue1.length;
  } else {
    return firstIndex + secondIndex + 2 - queue1.length;
  }
}
