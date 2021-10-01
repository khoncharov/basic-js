// import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
// export default function minesweeper (/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function isValidIndex(row, col, arr) {
  return row >= 0 && col >= 0 && row < arr.length && col < arr[0].length;
}

function checkAround(row, col, arr) {
  let c = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const sameCell = i === 0 && j === 0;
      if (!sameCell && isValidIndex(row + i, col + j, arr)) {
        let x = arr[row + i][col + j];
        if (x) {
          c++;
        }
      }
    }
  }
  return c; // mines number
}

export default function minesweeper(matrix) {
  // function minesweeper(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = new Array(m);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i][j] = checkAround(i, j, matrix);
    }
  }
  return result;
}

// const field = [
//   [true, true, true],
//   [false, true, true],
//   [false, true, false],
// ];
// console.log(minesweeper(field));
