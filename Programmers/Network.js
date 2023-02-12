const bfs = (node, index, computers, visited) => {
  const queue = [node];
  visited[index] = true;

  for (const front of queue) {
    front
      .map((computer, index) => [computer, index])
      .filter(([computer, index]) => computer === 1 && visited[index] === false)
      .forEach(([computer, index]) => {
        visited[index] = true;
        queue.push(computers[index]);
      });
  }

  return true;
};

function solution(n, computers) {
  let visited = Array(n).fill(false);

  return computers.filter((node, index) =>
    visited[index] === false ? bfs(node, index, computers, visited) : false
  ).length;
}
