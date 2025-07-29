// with method

const str = " h e l l o ";
const noSpaces = str.replace(/\s+/g, "");
console.log(noSpaces); // "hello"

// without method
const string = " h e l l o ";
let noSpaces2 = "";
for (let i = 0; i < string.length; i++) {
  if (string[i] !== " ") {
    noSpaces2 += string[i];
  }
}
console.log(noSpaces2); // "hello"