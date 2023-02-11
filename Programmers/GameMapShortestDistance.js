const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (node, maps) => {
  let visited = Array.from(Array(5), () => Array(5).fill(0));
  const queue = [node];
  visited[node.y][node.x] = 1;

  for (const front of queue) {
    [0, 1, 2, 3]
      .map((i) => [front.x + dx[i], front.y + dy[i]])
      .filter(([nx, ny]) => !(nx < 0 || nx >= 5 || ny < 0 || ny >= 5))
      .filter(([nx, ny]) => maps[ny][nx] === 1)
      .filter(
        ([nx, ny]) =>
          visited[ny][nx] === 0 ||
          visited[ny][nx] > visited[front.y][front.x] + 1
      )
      .forEach(([nx, ny]) => {
        visited[ny][nx] = visited[front.y][front.x] + 1;
        queue.push({ x: nx, y: ny });
        if (nx === 4 && ny === 4) queue.length = 0;
      });
  }
  return visited[4][4] === 0 ? -1 : visited[4][4];
};

function solution(maps) {
  return bfs({ x: 0, y: 0 }, maps);
}
