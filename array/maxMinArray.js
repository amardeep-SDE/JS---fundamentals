// MAX AND MIN
// 1. with method

const arr = [10, 50, 20, 80, 5, 100];

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log("With Method:");
console.log("Max:", max); // 100
console.log("Min:", min); // 5


// 2. with for loop
const array = [10, 50, 20, 80, 1, 200];
let max1 = array[0];
let min1 = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > max1) {
        max1 = array[i];
    }
    if (array[i] < min1) {
        min1 = array[i];
    }
}
console.log("With For Loop:");
console.log("Max:", max1); // 100
console.log("Min:", min1); // 5

