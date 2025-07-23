// with method

let str = "hello";
let reversed = str.split('').reverse().join('');
console.log(reversed); // "olleh"

// without method
let originalStr = "world";
let reversedStr = '';
for (let i = originalStr.length - 1; i >= 0; i--) {
  reversedStr += originalStr[i];
}
console.log(reversedStr); // "dlrow"