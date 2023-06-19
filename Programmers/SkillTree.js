const convertIndexArray = (skill, skillTree) =>
  [...skill].map((sk) => [...skillTree].indexOf(sk));

const isPrior = (arr) => {
  const findLength = arr.filter((a) => a !== -1).length;
  if (arr.length === findLength) return true;
  return arr.findIndex((a) => a === -1) >= findLength;
};

const isAscendingOrder = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
};

function solution(skill, skillTrees) {
  return skillTrees
    .map((skillTree) => convertIndexArray(skill, skillTree))
    .filter((arr) => isPrior(arr))
    .map((arr) => arr.filter((a) => a !== -1))
    .filter((arr) => isAscendingOrder(arr)).length;
}
