/*The operators === and == are both used for comparison in JavaScript, but they behave differently.
=== (Strict Equality Operator):
The === operator, also known as the strict equality operator, compares both the value and the type of the operands.
It returns true if the operands are equal in value and type, and false otherwise.*/
// example 1

console.log(1 === 1); // true

// example 2

let a = 5;
let b = '5';
console.log(a === b);  // false (different types)

/*== (Equality Operator):
The == operator, also known as the equality operator, compares the values of the operands after performing type coercion if necessary.
Type coercion means that JavaScript will attempt to convert the operands to the same type before making the comparison.
*/
let aa = 5;
let bb = '5';
console.log(aa == bb);  // true (after type coercion)


// ⭐Comparison Operators⭐