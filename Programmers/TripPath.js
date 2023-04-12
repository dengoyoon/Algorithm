const dfs = (ticketGraph, node) => {
  const result = [];
  const pathLength = [...Object.values(ticketGraph)].flat().length + 1;
  const isLeaf = (node) => ticketGraph[node.arrival] === undefined;

  const recursive = (node) => {
    if (node.visited) return;

    node.visited = true;
    result.push(node.arrival);

    for (const nextNode of ticketGraph[node.arrival]) {
      if (!isLeaf(nextNode)) recursive(nextNode);
      else if (result.length + 1 === pathLength) {
        nextNode.visited = true;
        result.push(nextNode.arrival);
        return;
      }
    }
  };

  recursive(node);
  return result;
};

function solution(tickets) {
  const ticketGraph = tickets.reduce((acc, [departure, arrival]) => {
    acc[departure] = (acc[departure] ?? [])
      .concat({ arrival, visited: false })
      .sort((a, b) => a.arrival.localeCompare(b.arrival));
    return acc;
  }, {});

  return dfs(ticketGraph, { arrival: "ICN" });
}
