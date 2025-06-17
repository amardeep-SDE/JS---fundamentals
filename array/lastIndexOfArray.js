// 1. with method

const fruit = ["apple", "banana", "mango", "banana", "grapes"];

const lastIndex1 = fruit.lastIndexOf("charry");

console.log("Last index of 'banana':", lastIndex1); 
// Output: 3


// 2. for loop
const fruits = ["apple", "banana", "mango", "banana", "grapes"];
let target = "banana";
let lastIndex = -1;

for (let i = fruits.length - 1; i >= 0; i--) {
  if (fruits[i] === target) {
    lastIndex = i;
    break; // Pehli match from last
  }
}

console.log("Last index of 'banana' (manual):", lastIndex);
// Output: 3
