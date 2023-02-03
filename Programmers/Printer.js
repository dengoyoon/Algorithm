const shiftLeft = (arr) => [...arr.slice(1), arr[0]];
const top = (arr) => arr[arr.length - 1];

function solution(priorities, location) {
  let priorityMapArray = [
    ...new Map(
      priorities.map((priority, location) => [location, priority])
    ).entries(),
  ];

  const print = [[-1, 0]];
  while (top(print)[0] !== location) {
    if (
      priorityMapArray
        .slice(1)
        .find((priorityMap) => priorityMap[1] > priorityMapArray[0][1])
    ) {
      priorityMapArray = shiftLeft(priorityMapArray);
    } else {
      print.push(priorityMapArray.shift());
    }
  }

  return print.length - 1;
}
