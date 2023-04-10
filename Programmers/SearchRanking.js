const isSame = (a, b) => a === b;
const isLarger = (a, b) => a >= b;
const isSatisfied = (f, info, query) => f(info, query) || query === "-";

function solution(infos, querys) {
  infos = infos
    .map((info) => info.split(" "))
    .map(([lang, team, career, food, score]) => ({
      lang,
      team,
      career,
      food,
      score: Number(score),
    }));

  return querys
    .map((query) => query.split(" "))
    .map((query) => query.filter((word) => word !== "and"))
    .map(([lang, team, career, food, score]) => ({
      lang,
      team,
      career,
      food,
      score: Number(score),
    }))
    .map(
      ({ lang, team, career, food, score }) =>
        infos.filter(
          (info) =>
            isSatisfied(isSame, info.lang, lang) &&
            isSatisfied(isSame, info.team, team) &&
            isSatisfied(isSame, info.career, career) &&
            isSatisfied(isSame, info.food, food) &&
            isSatisfied(isLarger, info.score, score)
        ).length
    );
}
