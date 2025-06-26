// 1. with method
const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter((num) => num % 2 === 0);
console.log(filtered); // [2, 4]

// 2. with for loop
const array = [1, 2, 3, 4, 5];
const filtered2 = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        filtered2.push(array[i]);
    }
}
console.log(filtered2); // [2, 4]