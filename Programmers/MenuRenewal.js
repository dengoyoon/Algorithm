const getCombinations = (arr, len) => {
  const result = [];
  const recurCombinations = (tempArr, start) => {
    if (tempArr.length === len) {
      result.push(tempArr.join(""));
      return;
    }
    for (let i = start; i < arr.length; i++) {
      recurCombinations(tempArr.concat(arr[i]), i + 1);
    }
  };
  recurCombinations([], 0);
  return result;
};

function solution(orders, courses) {
  orders = orders.map((order) =>
    order.split("").sort((a, b) => a.localeCompare(b))
  );
  return courses
    .map((course) =>
      orders.map((order) => getCombinations(order, course)).flat()
    )
    .map((courseCombinations) =>
      courseCombinations.reduce((acc, comb) => {
        acc[comb] = (acc[comb] ?? 0) + 1;
        return acc;
      }, {})
    )
    .map((countedObj) => {
      const countedObjArray = [...Object.entries(countedObj)];
      const max = Math.max(...countedObjArray.map(([, count]) => count));
      return countedObjArray
        .filter(([, count]) => count === max && count > 1)
        .map(([comb]) => comb);
    })
    .flat()
    .sort((a, b) => a.localeCompare(b));
}
