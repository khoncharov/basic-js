// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // function getCommonCharacterCount(s1, s2) {
  if (s1 === "" || s2 === "") {
    return 0;
  }
  const dict = new Set([...s1.split(""), ...s2.split("")]);
  let res = 0;
  Array.from(dict).forEach((i) => {
    const count1 = s1.split("").reduce((a, m) => {
      if (m === i) {
        a++;
      }
      return a;
    }, 0);
    const count2 = s2.split("").reduce((a, m) => {
      if (m === i) {
        a++;
      }
      return a;
    }, 0);
    res += Math.min(count1, count2);
  });
  return res;
}

// console.log(getCommonCharacterCount("aabcc", "adcaa")); // 3
// console.log(getCommonCharacterCount("zzzz", "zzzzzzz")); // 4
// console.log(getCommonCharacterCount("abca", "xyzbac")); // 3
// console.log(getCommonCharacterCount("", "abc")); // 0
// console.log(getCommonCharacterCount("a", "b")); // 0
