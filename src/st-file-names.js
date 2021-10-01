// import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

export default function renameFiles(names) {
  // function renameFiles(names) {
  const stat = {};
  const dict = new Set();
  names.forEach((name) => {
    if (dict.has(name)) {
      stat[name]++;
      const newName = `${name}(${stat[name]})`;
      dict.add(newName);
      stat[newName] = 0;
    } else {
      dict.add(name);
      stat[name] = 0;
    }
  });
  // console.log(stat);
  return Array.from(dict);
}

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
