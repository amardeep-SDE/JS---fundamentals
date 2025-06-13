// 1. with method

const arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b");
console.log(arr); // [1, "a", "b", 4]



// 2. with for loop
const array = [10, 20, 30, 40, 50];
const removed1 = [];
const newArr = [];

for (let i = 0; i < array.length; i++) {
  if (i >= 1 && i < 3) {
    removed1.push(array[i]);
  } else {
    newArr.push(array[i]);
  }
}

console.log(removed1); // [20, 30]
console.log(newArr);  // [10, 40, 50] move to new array
