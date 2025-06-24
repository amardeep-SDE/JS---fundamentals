// 1. with method

const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grapes")); // false

// 2. with for loop

const arr = ["apple", "banana", "mango"];
let value = "banana";
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    found = true;
    break;
  }
}
console.log("Found (manual):", found); // Output: true


// print wrong ans 
// const array = ["apple", "banana", "mango"];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === "banana") {
//         console.log("true");
//         break;
//     } else {
//         console.log("false");
//     }
// }