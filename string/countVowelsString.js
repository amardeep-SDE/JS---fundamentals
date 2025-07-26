// with method

let string = "javascript";
let count1 = string.match(/[aeiou]/gi)?.length || 0;
console.log(count1); // 3

// without method
let str = "javascript";
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    count++;
  }
}
console.log(count); // 3
