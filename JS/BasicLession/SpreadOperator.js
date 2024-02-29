// Spread Operator
// The spread operator is used to spread the elements of an array or an object.

// Syntax
// [...array]
// {...object}
// Example

let arr = [1, 2, 3, 4, 5];
console.log(...arr); // 1 2 3 4 5

let obj = { a: 1, b: 2, c: 3 };
console.log({ ...obj }); // { a: 1, b: 2, c: 3 }

// Example

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Example

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

//  ⭐ Spread Operator ⭐
