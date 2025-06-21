// 1. with method

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15 

// 2. with for loop
const array = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < array.length; i++) {
    sum2 += array[i];
}
console.log(sum2); // 15