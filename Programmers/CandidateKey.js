const powerSet = (arr) => {
  const result = [[]];

  for (let i = 0; i < arr.length; i++) {
    const len = result.length;
    for (let j = 0; j < len; j++) {
      result.push([...result[j], arr[i]]);
    }
  }

  return result.map((arr) => arr.join("")).slice(1, result.length);
};

const containsAll = (a, b) => [...b].every((x) => a.includes(x));

function solution(relation) {
  let indexPowerSet = powerSet([...Array(relation[0].length).keys()]);
  relation = relation.map(powerSet);
  const [rowLength, colLength] = [relation.length, relation[0].length];

  indexPowerSet = [...Array(colLength).keys()]
    .map((index) => relation.map((arr) => arr[index]))
    .map((attrs, index) => [new Set(attrs).size, index])
    .filter(([size, _]) => size === rowLength)
    .map(([_, index]) => index)
    .map((index) => indexPowerSet[index]);

  let count = 0;
  while (indexPowerSet.length !== 0) {
    const findNum = indexPowerSet[0];
    indexPowerSet = indexPowerSet.filter(
      (index) => !containsAll(index, findNum)
    );
    count += 1;
  }

  return count;
}
