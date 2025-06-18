// 1. With Method (Sort + Unique)

const number = [10, 70, 50, 30, 90, 25, 70];

// Step 1: Remove duplicates
const unique = [...new Set(number)];

// Step 2: Sort descending
unique.sort((a, b) => b - a);

// Step 3: Get 3rd largest
const thirdLargest = unique[2];

console.log("3rd largest number is:", thirdLargest); 
// Output: 50


const numbers = [10, 70, 50, 30, 90, 25];

let max = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];

  if (current > max) {
    thirdMax = secondMax;
    secondMax = max;
    max = current;
  } else if (current > secondMax && current < max) {
    thirdMax = secondMax;
    secondMax = current;
  } else if (current > thirdMax && current < secondMax) {
    thirdMax = current;
  }
}

console.log("3rd largest number is:", thirdMax);
// Output: 50
