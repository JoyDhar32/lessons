/* 
Logical AND (&&) returns true if both operands are true
Logical OR (||) returns true if one of the operands is true
Logical NOT (!) returns true if the operand is false and vice-versa
*/
// Example
console.log("*** \nLogical AND ***");

function checkLogicalAnd(a, b) {
  return a && b; 
}
console.log(checkLogicalAnd(true, true)); // Output: true
console.log(checkLogicalAnd(true, false)); // Output: false
console.log(checkLogicalAnd(false, false)); // Output: false

console.log("*** \nLogical OR ***");
// Example 2
function checkLogicalOr(a, b) {
  return a || b; 
}
console.log(checkLogicalOr(true, true)); // Output: true
console.log(checkLogicalOr(true, false)); // Output: true
console.log(checkLogicalOr(false, false)); // Output: false

console.log("*** \nLogical NOT ***");

// Example 3
function checkLogicalNot(a) {
  return !a; 
}   
console.log(checkLogicalNot(true)); // Output: false
console.log(checkLogicalNot(false)); // Output: true