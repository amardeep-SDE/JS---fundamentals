// . withy method 

const arr = [2, 3, 4];
arr.unshift(1);
console.log(arr); // [1, 2, 3, 4]


const baseArray = [50, 60, 70];
const newElement = 40; // naye element ko starting mein daalna hai

const updatedArray = [newElement, ...baseArray]; // spread operator se daal diya

console.log("After Unshift:", updatedArray);     // [40, 50, 60, 70]


// 2. with for loop
const numbers = [50, 60, 70];
const elementToAdd = 40;

// Step 1: Right shift existing elements
for (let index = numbers.length; index > 0; index--) {
  numbers[index] = numbers[index - 1];
}

// Step 2: Add new element at the start
numbers[0] = elementToAdd;

console.log("After custom unshift:", numbers); // [40, 50, 60, 70]

