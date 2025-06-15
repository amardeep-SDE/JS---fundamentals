// 1. with method
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed = arr.reverse();
console.log(reversed); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 2. with for loop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed2 = [];
for (let i = array.length - 1; i >= 0; i--) {
    reversed2.push(array[i]);
}
console.log(reversed2); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 3. with function
function reverseArray(array3) {
  const reversed = [];
  for (let i = array3.length - 1; i >= 0; i--) {
    reversed.push(array3[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

// 4. with while loop
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversed3 = [];
let i = array2.length - 1;
while (i >= 0) {
    reversed3.push(array2[i]);
    i--;
}
console.log(reversed3); // [9, 8, 7, 6, 5, 4, 3, 2, 1]

