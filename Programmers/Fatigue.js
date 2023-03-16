const dfs = (dungeons, node, visited) => {
  visited = [...visited];
  const [nodeIndex, nodeMin, nodeConsumption, nodeK] = node;
  let max = 0;

  if (visited[nodeIndex]) return 1;

  visited[nodeIndex] = true;

  dungeons
    .filter(([_, nextMin]) => nodeK >= nextMin)
    .forEach(([nextIndex, nextMin, nextConsumption]) => {
      const distance =
        1 +
        dfs(
          dungeons,
          [nextIndex, nextMin, nextConsumption, nodeK - nextConsumption],
          visited
        );
      max = max < distance ? distance : max;
    });
  return max === 0 ? 1 : max;
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

  return Math.max(
    ...dungeons.map((dungeon) =>
      dfs(dungeons, dungeon, [...Array(dungeons.length).fill(false)])
    )
  );
}
