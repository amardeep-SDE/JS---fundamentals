// 1. with method
const fruits = ["apple", "banana", "mango", "banana", "grapes"];

const index = fruits.indexOf("cheery");

console.log("Index of 'banana':", index);
// Output: 1


// 2. with for loop
const array = ["apple", "banana", "mango", "banana", "grapes"];
let index1;
for (let i = 0; i < array.length; i++) {
    if (array[i] === "banana") {
        index1 = i;
        break;
    }
}
console.log("Index of 'banana':", index1);