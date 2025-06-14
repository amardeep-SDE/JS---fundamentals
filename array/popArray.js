// 1. with  method

const arr = [1, 2, 3];
const removed = arr.pop();
console.log(removed); // 3
console.log(arr);     // [1, 2]


// 2. with for loop
const array = [1, 2, 3];
const removed1 = array[array.length - 1];
array.length = array.length - 1; // remove last
console.log(removed1); // 3
console.log(array);     // [1, 2]

// const array2 = [1, 2, 3, 4];
// const removed2 = [];
// for (let i = 0; i < array2.length; i++) {
//     if (i < array2.length - 1) {
//         removed2.push(array2[i]);
//     }
// }
// console.log(removed2); // [1, 2, 3]
// console.log(array2);     // [4]