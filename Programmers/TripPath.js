Array.prototype.top = function () {
  return this[this.length - 1];
};

const dfs = (ticketGraph, startNode) => {
  const stack = [startNode];
  const result = [];

  while (stack) {
    const departure = stack.top();
  }
};

function solution(tickets) {
  tickets = [
    ["ICN", "SFO"],
    ["SFO", "ICN"],
    ["ICN", "SFO"],
    ["SFO", "AAA"],
    ["AAA", "BBB"],
  ];
  const ticketGraph = tickets.reduce((acc, [departure, arrival]) => {
    acc[departure] = (acc[departure] ?? [])
      .concat(arrival)
      .sort((a, b) => b.localeCompare(a));
    return acc;
  }, {});

  console.log(ticketGraph);

  // return dfs(ticketGraph, {arrival : "ICN"});
}
