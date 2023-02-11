const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (node, maps) => {
  const [n, m] = [maps.length, maps[0].length];
  let visited = Array.from(Array(n), () => Array(m).fill(0));
  const queue = [node];
  visited[node.y][node.x] = 1;

  for (const front of queue) {
    [0, 1, 2, 3]
      .map((i) => [front.x + dx[i], front.y + dy[i]])
      .filter(([nx, ny]) => !(nx < 0 || nx >= m || ny < 0 || ny >= n))
      .filter(([nx, ny]) => maps[ny][nx] === 1)
      .filter(
        ([nx, ny]) =>
          visited[ny][nx] === 0 ||
          visited[ny][nx] > visited[front.y][front.x] + 1
      )
      .forEach(([nx, ny]) => {
        visited[ny][nx] = visited[front.y][front.x] + 1;
        queue.push({ x: nx, y: ny });
        if (nx === m - 1 && ny === n - 1) queue.length = 0;
      });
  }
  return visited[n - 1][m - 1] === 0 ? -1 : visited[n - 1][m - 1];
};

function solution(maps) {
  return bfs({ x: 0, y: 0 }, maps);
}
