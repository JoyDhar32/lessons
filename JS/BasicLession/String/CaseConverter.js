/*
UpperCase to LowerCase and vice versa:
*/
const lowerToUpper = (str) => {return str.toUpperCase();}
console.log(lowerToUpper('hello world!')); // Returns "HELLO WORLD!"

const upperToLower = (str) => {return str.toLowerCase();}   
console.log(upperToLower('HELLO WORLD!')); // Returns "hello world!"

// First letter of a string to UpperCase:
const firstLetterToUpper = (str) => {return str.charAt(0).toUpperCase() + str.slice(1);}

const secondLetterToLower = (str) => {return str.charAt(0)+ str.charAt(1).toLowerCase() + str.slice(2);}

console.log(`Convert First Letter to UpperCase: ${firstLetterToUpper('hello world!')}`); // Returns "Hello world!"

console.log(`Convert Second Letter to LowerCase: ${secondLetterToLower('HEllo World!')}`); // Returns "hELLO WORLD!"

console.log(firstLetterToUpper('hello world!')); // Returns "Hello world!"

console.log(secondLetterToLower('HELLO WORLD!')); // Returns "hELLO WORLD!"


// ⭐ UpperCase and LowerCase in depth ⭐

