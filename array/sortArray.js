// 1. with method
// ASCENDING ORDER

const arr = [10, 50, 20, 80, 5];
arr.sort((a, b) => a - b);
console.log(arr); // [5, 10, 20, 50, 80, 100]

// DESCENDING ORDER

const arr1 = [10, 50, 20, 80, 5];
arr1.sort((a, b) => b - a);
console.log(arr1); // [100, 80, 50, 20, 10, 5]


// 2. with for loop
// selection sort
const array = [10, 50, 20, 80, 5];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
console.log("selection sort" , array); // [5, 10, 20, 50, 80, 100]

