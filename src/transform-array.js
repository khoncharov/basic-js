// import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

//  --discard-next [del next]
//  --discard-prev [del prev]
//  --double-next [x x next]
//  --double-prev [x x prev]

export default function transform(arr) {
  // function transform(arr) {
  let s = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (!arr.length) {
    return [];
  }
  let discardNext = false;
  let doubleNext = false;
  arr.forEach((e, i) => {
    switch (e) {
      case "--discard-next":
        discardNext = true;
        s.push("");
        break;
      case "--discard-prev":
        if (i > 0) {
          s[s.length - 1] = "";
        }
        s.push("");
        break;
      case "--double-next":
        doubleNext = true;
        s.push("");
        break;
      case "--double-prev":
        if (i > 0) {
          s.push(s[s.length - 1]);
          s.push("");
        }
        break;
      default:
        if (discardNext) {
          discardNext = false;
          s.push("");
          break;
        }
        if (doubleNext) {
          doubleNext = false;
          s.push(e);
          s.push(e);
          break;
        }
        s.push(e);
        break;
    }
  });
  return s.filter((i) => i !== "");
}

// console.log(transform(["--discard-prev", 1, 2, 3]));
// input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
// output: [1, 2, 3, 4, 5]

// console.log(transform(["--double-prev", 1, 2, 3]));
// input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
// output: [1, 2, 3, 1337, 1337, 1337, 4, 5]

// console.log(transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]));
// input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
// output: [1, 2, 3, 4, 5]

// console.log(transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]));
// input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]
// output: [1, 2, 3, 1337, 4, 5]
