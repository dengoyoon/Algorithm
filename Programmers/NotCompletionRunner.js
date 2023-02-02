function solution(participant, completion) {
  const participantMap = new Map(participant.map((name) => [name, 0]));
  participant.forEach((name) => {
    participantMap.set(name, participantMap.get(name) + 1);
  });
  completion.forEach((name) => {
    participantMap.set(name, participantMap.get(name) - 1);
  });
  for (const [key, value] of participantMap) {
    if (value) return key;
  }
}
