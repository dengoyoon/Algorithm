const move = (x, y, command) => {
  let [nx, ny] = [x, y];
  switch (command) {
    case "U":
      [nx, ny] = [x, y + 1];
      break;
    case "D":
      [nx, ny] = [x, y - 1];
      break;
    case "R":
      [nx, ny] = [x + 1, y];
      break;
    case "L":
      [nx, ny] = [x - 1, y];
      break;
  }
  if (-5 <= nx && nx <= 5 && -5 <= ny && ny <= 5) return [nx, ny, true];
  else return [x, y, false];
};

const getOppositeCommand = (command) => {
  switch (command) {
    case "U":
      return "D";
    case "D":
      return "U";
    case "R":
      return "L";
    case "L":
      return "R";
  }
};

function solution(dirs) {
  let [x, y] = [0, 0];
  const visitedMap = {};

  [...dirs]
    .map((command) => {
      const [cx, cy] = [x, y];
      [x, y] = move(x, y, command);
      visitedMap[`${cx}${cy}`] = new Set();
      visitedMap[`${x}${y}`] = new Set();
      return [cx, cy, command];
    })
    .forEach(([cx, cy, command]) => {
      const [nx, ny, isSuccess] = move(cx, cy, command);
      if (
        !visitedMap[`${nx}${ny}`].has(getOppositeCommand(command)) &&
        isSuccess
      )
        visitedMap[`${cx}${cy}`].add(command);
    });

  return Object.values(visitedMap)
    .map((s) => s.size)
    .reduce((a, b) => a + b);
}
