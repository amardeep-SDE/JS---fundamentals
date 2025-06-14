// 1. with method

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// 2. with for loop
const array = [1, 2, 3];
const added = array[array.length] = 4;
console.log(added);
console.log(array); // [1, 2, 3, 4]