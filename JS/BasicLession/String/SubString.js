/*
String Substring: 
The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
This method extracts the characters in a string between "start" and "end", not including "end" itself.
If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
If either "start" or "end" is less than 0, it is treated as if it were 0.
Note: The substring() method does not change the original string.
*/
// Example 1: Extract characters from a string:
let str = "Hello world!";
console.log(str.substring(0, 5)); // Returns "ell"
console.log(str.substring(6)); // Returns "world!"

// Example 2: Extract only the first character:
let str2 = "Hello world!";
console.log(str2.substring(0, 1)); // Returns "H"

// Example 3: Extract only the last character:
let str3 = "Hello world!";
console.log(str3.substring(11)); // Returns "!"

//⭐ SubString in Depth ⭐