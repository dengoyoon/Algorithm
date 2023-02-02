function solution(nums) {
  const maxLength = nums.length / 2;
  const numsSetSize = new Set(nums).size;
  return maxLength < numsSetSize ? maxLength : numsSetSize;
}
