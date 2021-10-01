// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(m) {
  // function getMatrixElementsSum(m) {
  let result = 0;
  let h = m.length;
  let w = m[0].length;
  for (let j = 0; j < w; j++) {
    for (let i = 1; i < h; i++) {
      if (m[i - 1][j]) {
        result += m[i][j];
      }
    }
    result += m[0][j];
  }
  return result;
}

// matrix = [[1], [5], [0], [2]];
// console.log(getMatrixElementsSum(matrix));
