const makeCollection = (s) =>
  [...Array(s.length - 1).keys()]
    .map((index) => {
      const el = [s[index], s[index + 1]]
        .filter((s) => "A" <= s && s <= "Z")
        .join("");
      return el.length === 2 ? el : "";
    })
    .filter((el) => el !== "");

const makeCountedMap = (collection) => {
  const mp = new Map(collection.map((el) => [el, 0]));
  for (const el of collection) {
    mp.set(el, mp.get(el) + 1);
  }
  return mp;
};

const sumMapValues = (mp) =>
  mp.size !== 0 ? [...mp.values()].reduce((a, b) => a + b) : 0;

const getJ = (A, B) => {
  const intersection = new Map();
  const union = new Map(A);

  [...B].forEach(([key, value]) => {
    if (A.get(key)) {
      intersection.set(key, Math.min(A.get(key), value));
    }
    if (union.get(key)) {
      union.set(key, Math.max(union.get(key), value));
    } else {
      union.set(key, value);
    }
  });

  return parseInt((sumMapValues(intersection) / sumMapValues(union)) * 65536);
};

function solution(str1, str2) {
  const [A, B] = [str1, str2]
    .map((s) => s.toUpperCase())
    .map(makeCollection)
    .map(makeCountedMap);

  if (A.size === 0 && B.size === 0) {
    return 65536;
  } else if (A.size === 0 || B.size === 0) {
    return 0;
  }

  return getJ(A, B);
}
