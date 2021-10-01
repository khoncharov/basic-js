// import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // function getDNSStats(domains) {
  let t1 = [];
  let res = {};
  for (let domain of domains) {
    let dict = domain.split(".").reverse();
    dict.forEach((i) => {
      t1.push(`.${i}`);
    });
    for (let i = 1; i <= t1.length; i++) {
      let s = `${t1.slice(0, i).join("")}`;
      if (res[s]) {
        res[s]++;
      } else {
        res[s] = 1;
      }
    }
    t1 = [];
  }
  return res;
}

// domains = ["code.yandex.ru", "music.yandex.ru", "yandex.ru"];
// console.log(getDNSStats(domains));
