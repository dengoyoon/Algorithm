const isInRectangle = (x, y, rectangles) => {
  return rectangles.find(
    ([leftBottomX, leftBottomY, rightTopX, rightTopY]) =>
      leftBottomX < x && x < rightTopX && leftBottomY < y && y < rightTopY
  )
    ? true
    : false;
};

const isOnRectangle = (
  x,
  y,
  [leftBottomX, leftBottomY, rightTopX, rightTopY]
) =>
  (x === leftBottomX && leftBottomY <= y && y <= rightTopY) ||
  (x === rightTopX && leftBottomY <= y && y <= rightTopY) ||
  (y === leftBottomY && leftBottomX <= x && x <= rightTopX) ||
  (y === rightTopY && leftBottomX <= x && x <= rightTopX);

const isMovable = (mx, my, rectangles) => {
  return rectangles.find((rectangle) => isOnRectangle(mx, my, rectangle))
    ? !isInRectangle(mx, my, rectangles)
    : false;
};

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (rectangles, characterX, characterY, itemX, itemY) => {
  const queue = [[characterX, characterY]];
  let visited = Array.from(Array(51), () => Array(51).fill(0));
  visited[characterY][characterX] = 1;

  for (const [frontX, frontY] of queue) {
    [0, 1, 2, 3]
      .map((i) => [frontX + dx[i], frontY + dy[i]])
      .filter(([nx, ny]) => !(nx < 1 || nx > 50 || ny < 1 || ny > 50))
      .filter(
        ([nx, ny]) =>
          visited[ny][nx] === 0 || visited[ny][nx] > visited[frontY][frontX] + 1
      )
      .filter(([nx, ny]) =>
        isMovable((frontX + nx) / 2, (frontY + ny) / 2, rectangles)
      )
      .forEach(([nx, ny]) => {
        visited[ny][nx] = visited[frontY][frontX] + 1;
        if (!(nx === itemX && ny === itemY)) queue.push([nx, ny]);
      });
  }

  return visited[itemY][itemX] - 1;
};

function solution(rectangles, characterX, characterY, itemX, itemY) {
  return bfs(rectangles, characterX, characterY, itemX, itemY);
}
