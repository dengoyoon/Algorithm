const getDiffMinutes = (a, b) => (b - a) / (1000 * 60);
const leastZero = (a) => (a < 0 ? 0 : a);

const calcParkingFee = (minute, [baseMinute, baseFee, unitMinute, unitFee]) =>
  baseFee + Math.ceil(leastZero(minute - baseMinute) / unitMinute) * unitFee;

function solution(fees, records) {
  const recordMap = new Map();
  const accMinuteMap = records
    .map((record) => record.split(" "))
    .map(([time, carNumber, inout]) => {
      const _time = new Date().setHours(...time.split(":").map(Number), 0, 0);
      return [_time, carNumber, inout === "IN"];
    })
    .reduce((accMinuteMap, [curTime, curCarNumber, isIN]) => {
      if (isIN) {
        recordMap.set(curCarNumber, curTime);
      } else {
        const newMinute = getDiffMinutes(recordMap.get(curCarNumber), curTime);
        accMinuteMap.set(
          curCarNumber,
          (accMinuteMap.get(curCarNumber) ?? 0) + newMinute
        );
        recordMap.delete(curCarNumber);
      }

      return accMinuteMap;
    }, new Map());

  for (const [carNumber, time] of recordMap.entries()) {
    const lastTime = new Date().setHours(23, 59, 0, 0);
    const newMinute = getDiffMinutes(recordMap.get(carNumber), lastTime);
    accMinuteMap.set(carNumber, (accMinuteMap.get(carNumber) ?? 0) + newMinute);
  }

  return [...accMinuteMap.entries()]
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([_, minute]) => calcParkingFee(minute, fees));
}
