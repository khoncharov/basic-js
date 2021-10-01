// import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// export default function createDreamTeam(/* members */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let res = [];
    members.forEach((i) => {
      if (typeof i === "string") {
        res.push(i.trim()[0].toUpperCase());
      }
    });
    console.log(res);
    return res.length ? res.sort().join("") : false;
  }
  return false;
}
