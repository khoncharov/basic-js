// import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// export default function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
export default function repeater(str, options) {
  let opt;
  let defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };
  if (options) {
    opt = { ...defaultOptions, ...options };
  } else {
    opt = { ...defaultOptions };
  }
  const addition = [];
  for (let i = 0; i < opt.additionRepeatTimes; i++) {
    addition.push(String(opt.addition));
  }
  const additionStr = addition.join(`${opt.additionSeparator}`);
  const result = [];
  for (let i = 0; i < opt.repeatTimes; i++) {
    result.push(`${String(str)}${additionStr}`);
  }
  return result.join(`${opt.separator}`);
}

// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
// console.log(repeater("TYPE"));
//   repeater("TYPE", {
//     repeatTimes: 3,
//     separator: "**",
//     addition: "PLUS",
//     additionRepeatTimes: 3,
//     additionSeparator: "00",
//   })
// );
