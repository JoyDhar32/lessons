/* 
Ternary Operator:
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.
*/
// Example
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater"; 
}
console.log(findGreater(5, 4)); // Output: a is greater

// Example 2
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater"; 
}
console.log(findGreaterOrEqual(5, 4)); // Output: a is greater

// Example 3
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
console.log(checkSign(10)); // Output: positive
console.log(checkSign(-12)); // Output: negative

// Example 4
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
console.log(checkEqual(1, 2)); // Output: Not Equal

// Example 5
const checkBiggestNumber=(a,b,c)=>{
  return a>b && a>c ? a : b>a && b>c ? b : c;
}
console.log(checkBiggestNumber(1,2,3)); // Output: 3
console.log(checkBiggestNumber(1,3,2)); // Output: 3
console.log(checkBiggestNumber(3,2,1)); // Output: 3
console.log(checkBiggestNumber(3,1,22)); // Output: 2
console.log(checkBiggestNumber(2,1,13)); // Output: 13