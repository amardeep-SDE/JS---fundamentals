// 1. with method

const arr = [1,2,3,3,3,4,5];
// set
console.log([...new Set(arr)]);
// filter
console.log(arr.filter((value, index) => arr.indexOf(value) === index));


// 2. with for loop
const array = [1,2,3,3,3,4,5];
const unique = [];
for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
        unique.push(array[i]);
    }
}
console.log("Unique elements:", unique);
