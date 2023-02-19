// const bfs = (numbers) => {
//     const queue = [...[...numbers].entries()];
//     const visitedMap = new Map(queue.map(([_, n]) => [n, true]));

//     for (const [frontIndex, front] of queue) {
//         [...[...numbers].entries()]
//             .filter(([index, num]) => frontIndex !== index)
//     }

//     return [...visitedMap.keys()];
// } dfs로 바꿔야함.

function solution(numbers) {
  console.log(bfs(numbers));
}
