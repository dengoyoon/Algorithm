const nullish = (s) => (s ? s : 0);

function matchingStrings(stringList, queries) {
  const countByString = new Map();
  stringList.forEach((string) => {
    countByString.set(string, nullish(countByString.get(string)) + 1);
  });

  return queries.map((query) => nullish(countByString.get(query)));
}
