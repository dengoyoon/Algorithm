Array.prototype.top = function () {
  return this[this.length - 1];
};
Array.prototype.isEmpty = function () {
  return this.length === 0;
};

const dfs = (node, graph, visited) => {
  if (graph[node] === undefined) return 1;
  if (visited[node]) return 0;
  const stack = [node];
  const result = [];
  visited[node] = true;

  while (!stack.isEmpty()) {
    result.push(stack.top());
    graph[stack.pop()]
      .filter((nextNode) => !visited[nextNode])
      .forEach((nextNode) => {
        visited[nextNode] = true;
        stack.push(nextNode);
      });
  }
  return result.length;
};

function solution(n, wires) {
  return wires
    .map((_, index, arr) => arr.filter((_, i) => i !== index))
    .map((cuttedWires) => {
      const wireGraph = cuttedWires.reduce((acc, [start, end]) => {
        [start, end] = [start, end].map(String);
        acc[start] = (acc[start] ?? []).concat(end);
        acc[end] = (acc[end] ?? []).concat(start);
        return acc;
      }, {});
      const visited = [];
      return [...Array(n).keys()]
        .map((n) => String(n + 1))
        .map((node) => dfs(node, wireGraph, visited))
        .filter((length) => length !== 0)
        .reduce((a, b) => Math.abs(a - b));
    })
    .reduce((a, b) => Math.min(a, b));
}
