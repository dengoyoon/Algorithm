function solution(s) {
  const memoObj = {};
  return s
    .replace("{{", "")
    .replace("}}", "")
    .split("},{")
    .map((s) => s.split(","))
    .sort((a, b) => a.length - b.length)
    .flat()
    .reduce((acc, num) => {
      if (memoObj[num] === undefined) {
        memoObj[num] = true;
        acc.push(num);
      }
      return acc;
    }, [])
    .map(Number);
}
