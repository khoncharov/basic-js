// import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// export default class DepthCalculator {
//   calculateDepth(/* arr */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

export default class DepthCalculator {
  // class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        1 +
        Math.max(
          ...arr.map((i) => {
            let f = this.calculateDepth(i);
            if (f === -Infinity) {
              return 1;
            }
            return f;
          })
        )
      );
    } else {
      return 0;
    }
  }
}

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([[[[1, 2], 2, [3], [[[3, 1]]]]], 1, 2, []]));
// console.log(
//   depthCalc.calculateDepth([
//     1,
//     [8, [[]]],
//     [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//     2,
//     3,
//     [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//     [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//     4,
//     5,
//     ["6575", ["adas", ["dfg", [0]]]],
//   ])
// );

// depthCalc.calculateDepth([
//   1,
//   [8, [[]]],
//   [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
//   2,
//   3,
//   [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
//   [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//   4,
//   5,
//   ["6575", ["adas", ["dfg", [0]]]],
// ]);
