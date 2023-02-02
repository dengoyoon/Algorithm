function solution(clothes) {
  const clothesMap = new Map(clothes.map(([value, key]) => [key, 1]));
  clothes.forEach(([value, key]) => {
    clothesMap.set(key, clothesMap.get(key) + 1);
  });
  return [...clothesMap.values()].reduce((a, b) => a * b) - 1;
}
