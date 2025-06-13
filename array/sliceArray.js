// 1. with method

const arr = [10, 20, 30, 40, 50];
const sliced = arr.slice(1, 4); // index 1 to 3
console.log(sliced); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50] — original remains

//  for lopp

const array = [10, 20, 30, 40, 50];
const sliced1 = [];
for (let i = 1; i < 4; i++) {
  sliced1.push(array[i]);
}
console.log(sliced1); // [20, 30, 40]
console.log(array);    // [10, 20, 30, 40, 50] — original remains
