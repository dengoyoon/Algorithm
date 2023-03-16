const log = console.log;

const bfs = (node, dungeons) => {
  const queue = [node];
  const visited = [...Array(dungeons.length).fill(0)];
  visited[node[0]] = 1;

  for (const [frontIndex, frontMin, frontConsumption, frontK] of queue) {
    dungeons
      .filter(([_, nextMin]) => frontK >= nextMin)
      .filter(
        ([nextIndex]) =>
          visited[nextIndex] === 0 ||
          visited[nextIndex] < visited[frontIndex] + 1
      )
      .forEach(([nextIndex, nextMin, nextConsumption]) => {
        visited[nextIndex] = visited[frontIndex] + 1;
        console.log(frontIndex, visited);
        queue.push([
          nextIndex,
          nextMin,
          nextConsumption,
          frontK - nextConsumption,
        ]);
        // console.log("queue", queue)
      });
  }
  return Math.max(...visited);
};

function solution(k, dungeons) {
  dungeons = dungeons
    .filter(([min, _]) => k >= min)
    .map(([min, consumption], index) => [
      index,
      min,
      consumption,
      k - consumption,
    ]);

  // return dungeons.map(node => bfs(node, dungeons));
  return bfs(dungeons[0], dungeons);
}
