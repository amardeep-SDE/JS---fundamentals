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

const arr2 = [1,2,3,3,4,4];
let uniqueValue = [];
for(let i = 0; i <arr2.length; i++)
{
    if(!uniqueValue.includes(arr2[i]))
    {
        uniqueValue.push(arr2[i]);
    }
}
console.log("includes method:", uniqueValue);