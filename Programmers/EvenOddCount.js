function solution(num_list) {
  const evensLength = num_list.filter((n) => n % 2 === 0).length;
  return [evensLength, num_list.length - evensLength];
}
