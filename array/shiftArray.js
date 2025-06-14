// 1. with method

const arr = [10, 20, 30];
const removed = arr.shift();
console.log(removed); // 10
console.log(arr);     // [20, 30]

// 2. with for loop
const array2 = [1, 2, 3];
const removed2 = array2[0];

// Shift all elements left
for (let i = 1; i < array2.length; i++) {
  array2[i - 1] = array2[i];
}
array2.length = array2.length - 1;

console.log(removed2); // 10
console.log(array2);     // [2, 3]
