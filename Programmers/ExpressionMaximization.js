function* genAlter(a, b) {
  const [iterA, iterB] = [a, b].map((x) => x[Symbol.iterator]());
  for (let i = 0; i < a.length + b.length; i++) {
    if (i % 2 === 0) {
      yield iterA.next().value;
    } else {
      yield iterB.next().value;
    }
  }
}

const top = (arr) => arr[arr.length - 1];

const convertPostFix = (genExpression, priorityMap) => {
  const stack = [];
  const postFix = [];
  let el = genExpression.next().value;
  while (el !== undefined) {
    if (typeof el === "number") {
      postFix.push(el);
    } else {
      while (
        top(stack) !== undefined &&
        priorityMap.get(top(stack)) >= priorityMap.get(el)
      ) {
        postFix.push(stack.pop());
      }
      stack.push(el);
    }
    el = genExpression.next().value;
  }
  while (top(stack) !== undefined) {
    postFix.push(stack.pop());
  }
  return postFix;
};

const getPriorities = (opLength) => {
  switch (opLength) {
    case 1:
      return [[1]];
    case 2:
      return [
        [1, 2],
        [2, 1],
      ];
    case 3:
      return [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ];
  }
};

const calc = (b, a, op) => {
  switch (op) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "-":
      return a - b;
  }
};

const calcPostFix = (postFix) => {
  const stack = [];
  for (const el of postFix) {
    if (typeof el === "number") stack.push(el);
    else {
      const x = calc(stack.pop(), stack.pop(), el);
      stack.push(x);
    }
  }
  return stack.pop();
};

function solution(expression) {
  const pattern = /[+\-*]/g;
  const numbers = expression.split(pattern).map(Number);
  const operations = expression.match(pattern);
  const opSet = new Set(operations);
  const priorities = getPriorities(opSet.size);

  return priorities
    .map(
      (priority) => new Map(priority.map((n, index) => [[...opSet][index], n]))
    )
    .map((priorityMap) =>
      convertPostFix(genAlter(numbers, operations), priorityMap)
    )
    .map(calcPostFix)
    .map(Math.abs)
    .reduce((a, b) => Math.max(a, b));
}
