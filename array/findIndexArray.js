// 1. with method

const numbers = [10, 20, 30, 40, 50];

const index = numbers.findIndex((num) => num > 25);

console.log("First index where value > 25:", index); 
// Output: 2 (30 is at index 2)


// 2. with for loop
const array = [10, 20, 30, 40, 50];
let index1;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 25) {
        index1 = i;
        break;
    }
}
console.log("First index where value > 25:", index1);