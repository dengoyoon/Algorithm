function solution(progresses, speeds) {
  const completionDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  const deploys = [completionDays[0]];
  let max = completionDays[0];
  const splitedDays = completionDays.slice(1).reduce((acc, cur) => {
    if (max < cur) {
      max = cur;
      acc.push(deploys.length);
      deploys.length = 0;
    }

    deploys.push(cur);

    return acc;
  }, []);
  splitedDays.push(deploys.length);

  return splitedDays;
}
