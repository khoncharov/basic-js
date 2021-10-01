// import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // function encodeLine(str) {
  let count = 0;
  const res = [];
  const arr = str.split("");
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count === 0) {
        res.unshift(arr[i]);
      } else {
        res.unshift(`${count + 1}${arr[i]}`);
        count = 0;
      }
    }
  }
  return res.join("");
}

// console.log(encodeLine("axaabbbca"));
