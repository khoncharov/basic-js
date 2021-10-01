// import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chn: [],
  getLength() {
    return this.chn.length;
  },
  addLink(value = "") {
    this.chn.push(value);
    return this;
  },
  removeLink(pos) {
    if (!Number.isInteger(pos) || pos < 1 || pos > this.chn.length) {
      this.chn = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chn.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.chn.reverse();
    return this;
  },
  finishChain() {
    let res = this.chn.map((i) => `( ${i} )`).join("~~");
    this.chn = [];
    return res;
  },
};

// const chainMaker = {
//   chn: [],
//   getLength() {
//     return this.chn.length;
//   },
//   addLink(value = "") {
//     this.chn.push(value);
//     return this;
//   },
//   removeLink(pos) {
//     if (!Number.isInteger(pos) || pos < 1 || pos > this.chn.length) {
//       this.chn = [];
//       throw new Error("You can't remove incorrect link!");
//     }
//     this.chn.splice(pos - 1, 1);
//     return this;
//   },
//   reverseChain() {
//     this.chn.reverse();
//     return this;
//   },
//   finishChain() {
//     let res = this.chn.map((i) => `( ${i} )`).join("~~");
//     this.chn = [];
//     return res;
//   },
// };

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).finishChain());
// console.log(
//   chainMaker
//     .addLink("GHI")
//     .addLink(null)
//     .reverseChain()
//     .addLink(333)
//     .reverseChain()
//     .reverseChain()
//     .addLink(0)
//     .reverseChain()
//     .reverseChain()
//     .addLink("GHI")
//     .finishChain()
// );

// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
