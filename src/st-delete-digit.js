import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const result = [];
  const s = `${n}`;
  for (let i = 0; i < s.length; i++) {
    result.push(s.slice(0, i) + s.slice(i + 1, s.length));
  }
  return parseInt(result.sort((a, b) => b - a)[0]);
}

// console.log(deleteDigit(152));
