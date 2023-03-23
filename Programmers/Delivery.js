const bfs = (graph, node, K) => {
  const queue = [node];
  const visited = [];
  visited[node.des] = node.time;

  for (const currentNode of queue) {
    graph[currentNode.des]
      .filter((nextNode) => nextNode.time + currentNode.time <= K)
      .filter(
        (nextNode) =>
          visited[nextNode.des] === undefined ||
          visited[nextNode.des] > nextNode.time + currentNode.time
      )
      .forEach((nextNode) => {
        visited[nextNode.des] = nextNode.time + currentNode.time;
        queue.push({
          des: nextNode.des,
          time: nextNode.time + currentNode.time,
        });
      });
  }

  return visited.filter((x) => x !== undefined).length;
};

function solution(N, roads, K) {
  const graph = Array.from(Array(N + 1), () => []);
  roads.forEach(([start, end, time]) => {
    graph[start].push({ des: end, time });
    graph[end].push({ des: start, time });
  });

  return bfs(graph, { des: 1, time: 0 }, K);
}
