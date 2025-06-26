// 1. with method

const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 2. with for loop
const array = [1, 2, 3, 4, 5];
const doubled2 = [];
for (let i = 0; i < array.length; i++) {
    doubled2.push(array[i] * 2);
}
console.log(doubled2); // [2, 4, 6, 8, 10]