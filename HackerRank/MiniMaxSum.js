function miniMaxSum(arr) {
  const sum = arr.sort((a, b) => a - b).reduce((a, b) => a + b);
  console.log(sum - arr[arr.length - 1], sum - arr[0]);
}
