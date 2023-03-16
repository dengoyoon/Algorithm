const dfs = (index, visited) => {
  visited = [...visited];
  visited[index] = 8;
  console.log(visited);
};

function run() {
  const visited = [0, 0, 0, 0, 0];
  dfs(1, visited);
  dfs(2, visited);
}

run();
