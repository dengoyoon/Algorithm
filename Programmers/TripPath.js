const dfs = (node, ticketMap) => {
  const path = [node];
  const nextLocations = ticketMap.get(node);
  const ticketLength = [...ticketMap.values()].flat().length;

  if (nextLocations === undefined) return path;
  else {
    nextLocations.map((location) => [...dfs(location, ticketMap)]);
    // .filter(nextPath => )
  }

  if (path.length === ticketLength) return path;
  else return [];
  // if (nextLocation === undefined)
  //     return path;
  //     if (nextLocation.length !== 0) {
  //         ticketMap.set(node, nextLocation.slice(1));

  //         path.push(...dfs(nextLocation[0], ticketMap));
  //     }
  //     return path;
};

function solution(tickets) {
  const ticketMap = new Map();
  tickets.forEach(([start, end]) => {
    if (ticketMap.get(start))
      ticketMap.set(
        start,
        [...ticketMap.get(start), end].sort((a, b) => (a > b ? 1 : -1))
      );
    else ticketMap.set(start, [end]);
  });
  console.log(ticketMap);
  // return dfs('ICN', ticketMap);
}
