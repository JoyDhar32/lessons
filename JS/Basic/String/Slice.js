/*
String slice:
The slice() method extracts parts of a string and returns the extracted parts in a new string.
Use the start and end parameters to specify the part of the string you want to extract.
The first character has the position 0, the second has position 1, and so on.
Tip: Use a negative number to select from the end of the string.
Note: The slice() method does not change the original string.
difference between slice() and substring():

*/

// Example 1: Extract only the first character:
let str = "HELLO WORLD";
console.log(str.slice(0, 1)); // Returns "H"
console.log(str.slice(0, 2)); // Returns "HE"

// Example 2: Extract only the last character:
let str2 = "HELLO WORLD";
console.log(str2.slice(-1)); // Returns "D"
console.log(str2.slice(1)); // Returns "LD"

// Example 3: Extract characters from position 7 and to the end:
let str3 = "HELLO WORLD";
console.log(str3.slice(6)); // Returns "ORLD"

// Example 4: Extract characters from position 0 to position 7:

let str4 = "HELLO WORLD";
console.log(str4.slice(3, 7)); // Returns "LO W"
console.log(str4.slice()); // Returns "HELLO W"

// ⭐ Slice in Depth ⭐