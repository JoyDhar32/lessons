// Includes the basic includes for the basic lesson
// definition of includes operator
// The includes operator is used to check if a string or an array contains a specific element.

// Syntax
// string.includes(searchString)
// array.includes(searchElement)

// Example
let str = "Hello World";
console.log(str.includes("Hello")); // true

// Example

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false

// Example

let email= 'abc123@gmail.com'
let email2= 'abc123gmail.m'
console.log(email.includes('@')&& email.includes('.com')? 'Valid Email' : 'Invalid Email')
console.log(email2.includes('@')&& email.includes('.com')? 'Valid Email' : 'Invalid Email')

// ⭐ Includes Operator ⭐