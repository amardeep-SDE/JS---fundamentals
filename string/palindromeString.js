// with mwthod

let str = "madam";
let isPalindrome = str === str.split('').reverse().join('');
console.log(isPalindrome); // true

// without method
let string = "madam";
let isPalindrome1 = true;
for (let i = 0; i < string.length / 2; i++) {
  if (string[i] !== str[string.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome); // true
