const isPoppable = (i, j, board) =>
  board[i][j] !== null
    ? [
        board[i][j],
        board[i + 1][j],
        board[i][j + 1],
        board[i + 1][j + 1],
      ].every((block) => block === board[i][j])
    : false;

const isAllFalse = (markingBoard) =>
  markingBoard.flat().every((x) => x === false);

function solution(m, n, board) {
  board = [...Array(n).keys()].map((index) => board.map((row) => row[index]));
  let markingBoard = [true];
  while (!isAllFalse(markingBoard)) {
    markingBoard = Array.from(Array(n), () => Array(m).fill(false));
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < m - 1; j++) {
        if (isPoppable(i, j, board)) {
          markingBoard[i][j] = true;
          markingBoard[i + 1][j] = true;
          markingBoard[i][j + 1] = true;
          markingBoard[i + 1][j + 1] = true;
        }
      }
    }
    board = board
      .map((row, i) => row.filter((_, j) => !markingBoard[i][j]))
      .map((row) => [...Array(m - row.length).fill(null), ...row]);
  }
  return board.flat().filter((block) => block === null).length;
}
