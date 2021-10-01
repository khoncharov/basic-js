// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // function sortByHeight(arr) {
  let x = arr.reduce((acc, i) => {
    if (i !== -1) {
      acc.push(i);
    }
    return acc.sort((a, b) => a - b);
  }, []);
  let res = [];
  arr.forEach((i) => {
    if (i === -1) {
      res.push(-1);
    } else {
      res.push(x.shift());
    }
  });
  return res;
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// // [-1, 150, 160, 170, -1, -1, 180, 190]

// console.log(sortByHeight([-1, -1, -1, -1, -1]));
// // [-1, -1, -1, -1, -1]

// console.log(sortByHeight([-1]));
// // [-1]

// console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
// // [2, 2, 4, 9, 11, 16]

// console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
// // [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
