function solution(files) {
  const pattern = /\d{1,5}/;
  return files
    .map((file) => {
      const num = file.match(pattern)[0];
      const sliceIndex = file.indexOf(num) + num.length;
      return [file.split(num)[0], num, file.slice(sliceIndex)];
    })
    .sort(([aHead, aNum], [bHead, bNum]) => {
      [aHead, bHead] = [aHead, bHead].map((s) => s.toLowerCase());
      [aNum, bNum] = [aNum, bNum].map(Number);
      if (aHead !== bHead) {
        return aHead > bHead ? 1 : -1;
      } else {
        return aNum - bNum;
      }
    })
    .map((file) => file.join(""));
}
