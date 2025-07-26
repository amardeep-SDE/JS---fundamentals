// with method Using Set
// let string = [1,2,3,3,3,4,5]; array
let string = "programming";
let uniqueString = [...new Set(string)].join('');
console.log("With Set method:", uniqueString); // "progamin"

// without method
// OR using includes (your style)
let str2 = "programming";
let resultStr = "";

for (let i = 0; i < str2.length; i++) {
  if (!resultStr.includes(str2[i])) {
    resultStr += str2[i];
  }
}
console.log("With includes method:", resultStr); // "progamin"

let str = "programming";
let uniqueStr = "";

for (let i = 0; i < str.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < uniqueStr.length; j++) {
    if (str[i] === uniqueStr[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    uniqueStr += str[i];
  }
}

console.log("Without method:", uniqueStr); // "progamin"

