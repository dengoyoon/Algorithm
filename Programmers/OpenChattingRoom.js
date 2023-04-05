function solution(records) {
  records = records.map((record) => record.split(" "));
  const userMap = new Map(
    records
      .filter(([command]) => command !== "Leave")
      .map(([_, uid, nickname]) => [uid, nickname])
  );
  return records
    .filter(([command]) => command !== "Change")
    .map(([command, uid, nickname]) =>
      command === "Enter"
        ? `${userMap.get(uid)}님이 들어왔습니다.`
        : `${userMap.get(uid)}님이 나갔습니다.`
    );
}
