const checkChangeable = (a, b) => {
  let diff = 0;

  for (const index in a) {
    diff += a[index] === b[index] ? 0 : 1;
  }

  return diff === 1;
};

const bfs = (node, target, words) => {
  const queue = [[node, -1]];
  let visited = Array(words.length).fill(0);

  for (const [front, frontIndex] of queue) {
    words
      .map((word, index) => [word, index])
      .filter(([word, _]) => checkChangeable(front, word))
      .filter(
        ([_, index]) =>
          visited[index] === 0 || visited[index] > visited[frontIndex] + 1
      )
      .forEach(([word, index]) => {
        visited[index] = frontIndex === -1 ? 1 : visited[frontIndex] + 1;
        queue.push([word, index]);
      });
  }

  return visited[words.findIndex((word) => word === target)];
};

function solution(begin, target, words) {
  return words.includes(target) ? bfs(begin, target, words) : 0;
}
