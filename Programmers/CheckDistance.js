const filterP = (place) =>
  place
    .map((row, y) =>
      row
        .split("")
        .map((cell, x) => [cell, x, y])
        .filter(([cell]) => cell === "P")
    )
    .flat()
    .map((cell) => cell.slice(1));

const dx = {
  adjacent: [0, 1, 0, -1],
  diagonal: [1, 1, -1, -1],
  twoApart: [0, 2, 0, -2],
};

const dy = {
  adjacent: [1, 0, -1, 0],
  diagonal: [1, -1, -1, 1],
  twoApart: [2, 0, -2, 0],
};

const isBoundary = ([nx, ny]) => 0 <= nx && nx <= 4 && 0 <= ny && ny <= 4;

const checkAdjacent = ([x, y], place) =>
  [0, 1, 2, 3]
    .map((i) => [x + dx.adjacent[i], y + dy.adjacent[i]])
    .filter(isBoundary)
    .every(([nx, ny]) => place[ny][nx] !== "P");

const nextIndex = (i) => (i === 3 ? 0 : i + 1);

const checkDiagonal = ([x, y], place) =>
  [0, 1, 2, 3]
    .map((i) => [x + dx.diagonal[i], y + dy.diagonal[i], i])
    .filter(isBoundary)
    .filter(([nx, ny]) => place[ny][nx] === "P")
    .every(
      ([, , i]) =>
        place[y + dy.adjacent[i]][x + dx.adjacent[i]] === "X" &&
        place[y + dy.adjacent[nextIndex(i)]][x + dx.adjacent[nextIndex(i)]] ===
          "X"
    );

const checkTwoApart = ([x, y], place) =>
  [0, 1, 2, 3]
    .map((i) => [x + dx.twoApart[i], y + dy.twoApart[i], i])
    .filter(isBoundary)
    .every(
      ([nx, ny, i]) =>
        place[ny][nx] !== "P" ||
        (place[y + dy.adjacent[i]][x + dx.adjacent[i]] === "X" &&
          place[ny][nx] === "P")
    );

const checkRoom = (place) => {
  const ps = filterP(place);
  return ps
    .filter((cell) => checkAdjacent(cell, place))
    .filter((cell) => checkDiagonal(cell, place))
    .filter((cell) => checkTwoApart(cell, place)).length === ps.length
    ? 1
    : 0;
};

function solution(places) {
  return places.map(checkRoom);
}
