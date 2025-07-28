// Capitalize the first letter of each word
// 1. with method
const str = "hello world";
const capitalized = str
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
console.log(capitalized); // "Hello World"

// 2. with for loop
const string = "hello world";
const capitalized1 = "";
for (let i = 0; i < string.length; i++) {
  if (i === 0 || string[i - 1] === " ") {
    capitalized1 += string[i].toUpperCase();
  } else {
    capitalized1 += string[i].toLowerCase();
  }
}
console.log(capitalized1); // "Hello World"

const str1 = "hello world";
let result = "";
let capitalizeNext = true;
for (let i = 0; i < str1.length; i++) {
  if (capitalizeNext && str[i] !== " ") {
    result += str1[i].toUpperCase();
    capitalizeNext = false;
  } else {
    result += str1[i];
    if (str1[i] === " ") capitalizeNext = true;
  }
}
console.log(result); // "Hello World"
