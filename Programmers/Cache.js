const updateMap = (mp, key, isFind) => {
  const deleteKey = isFind ? key : [...mp][0][0];
  mp.delete(deleteKey);
  mp.set(key, true);
};

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let cacheMap = new Map();

  return cities
    .map((city) => city.toUpperCase())
    .map((city) => {
      if (cacheMap.get(city)) {
        updateMap(cacheMap, city, true);
        return 1;
      } else if (cacheMap.size < cacheSize) {
        cacheMap.set(city, true);
        return 5;
      } else {
        updateMap(cacheMap, city, false);
        return 5;
      }
    })
    .reduce((a, b) => a + b);
}
