function makeGenreMap(genres, plays) {
  const genreSet = new Set(genres);

  const genreMap = new Map([...genreSet].map((genre) => [genre, new Map()]));

  genres.forEach((genre, index) => {
    genreMap.get(genre).set(index, plays[index]);
  });
  return genreMap;
}

const countTotalPlay = (map) => [...map[1].values()].reduce((a, b) => a + b);

const sortByGenre = (genreMapArray) => {
  genreMapArray.sort((a, b) => countTotalPlay(b) - countTotalPlay(a));
};

function solution(genres, plays) {
  const genreMap = makeGenreMap(genres, plays);
  const genreMapArray = [...genreMap.entries()];
  sortByGenre(genreMapArray);
  return genreMapArray
    .map((genreMap) =>
      [...genreMap[1].entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map((m) => m[0])
    )
    .flat();
}
