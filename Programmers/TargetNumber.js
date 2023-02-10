function solution(numbers, target) {
  let count = 0;
  const dfs = (acc, depth) => {
    if (depth === numbers.length) {
      if (target === acc) {
        count += 1;
      }
      return;
    }
    dfs(acc + numbers[depth], depth + 1);
    dfs(acc - numbers[depth], depth + 1);
  };

  dfs(0, 0);

  return count;
}
