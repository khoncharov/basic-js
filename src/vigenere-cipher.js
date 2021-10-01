// import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
// export default class VigenereCipheringMachine {
//   encrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//   decrypt() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

export default class VigenereCipheringMachine {
  // class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, keyWord) {
    this.checkArgs(message, keyWord);
    const msg = message.toUpperCase();
    const key = keyWord.toUpperCase();
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const maxlength = msg.length;
    let res = [];
    let c = 0;
    for (let i = 0; i < maxlength; i++) {
      if (~a.indexOf(msg[i])) {
        const mi = a.indexOf(msg[i >= msg.length ? i % msg.length : i]);
        const w = key[c >= key.length ? c % key.length : c];
        const ki = a.indexOf(w);
        let s = a[(a.length + (mi + ki)) % a.length];
        this.direct ? res.push(s) : res.unshift(s);
        c += 1;
      } else {
        this.direct ? res.push(msg[i]) : res.unshift(msg[i]);
      }
    }
    return res.join("");
  }

  decrypt(message, keyWord) {
    this.checkArgs(message, keyWord);
    const msg = message.toUpperCase();
    const key = keyWord.toUpperCase();
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const maxlength = msg.length;
    let res = [];
    let c = 0;
    for (let i = 0; i < maxlength; i++) {
      if (~a.indexOf(msg[i])) {
        const mi = a.indexOf(msg[i >= msg.length ? i % msg.length : i]);
        const w = key[c >= key.length ? c % key.length : c];
        const ki = -a.indexOf(w);
        let s = a[(a.length + (mi + ki)) % a.length];
        this.direct ? res.push(s) : res.unshift(s);
        c += 1;
      } else {
        this.direct ? res.push(msg[i]) : res.unshift(msg[i]);
      }
    }
    return res.join("");
  }

  checkArgs(msg, key) {
    if (!msg || !key) {
      throw new Error("Incorrect arguments!");
    }
  }
}

// const obj = new VigenereCipheringMachine(true);
// console.log(obj);
// console.log(obj.encrypt("attack at dawn!", "alphonse"));
// // 'attack at dawn!', 'alphonse'), 'AEIHQX SX DLLU!'
// console.log(obj.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey"));
// // 'Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
// console.log(obj.encrypt("cryptography", "verylongkeyword"));
// // 'cryptography', 'verylongkeyword'), 'XVPNECTXKTFU'
// console.log(obj.encrypt("Samelengthkey", "Samelengthkey"));
// // 'Samelengthkey', 'Samelengthkey'), 'KAYIWIAMMOUIW'
// console.log(obj.encrypt("Same length key", "Samelengthkey"));
// // 'Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW'

// console.log(obj.decrypt("AEIHQX SX DLLU!", "alphonse"));
