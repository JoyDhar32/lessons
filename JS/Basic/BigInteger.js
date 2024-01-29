/*
Biginteger:
n JavaScript, the BigInt is a primitive data type introduced in ECMAScript 2020 that provides a way to represent arbitrary precision integers. Unlike the regular Number type, which has a maximum safe integer limit, BigInt can represent integers of arbitrary size
*/

// Example 1
const a = 900719925124740998n;
const normal=900719925124740;
const bigInt=900719925124740n;
const b = 900719925124740998n;
console.log(a === b); // true
console.log(typeof a); // bigint
console.log(typeof normal); // number
console.log(normal === bigInt); // false
console.log(normal == bigInt); // true

// Example 2

let maxInteger= Number.MAX_SAFE_INTEGER;
console.log(maxInteger); // 9007199254740991
let random= 10;
let maxIntegerPlusOne = maxInteger * 100000;
console.log(maxIntegerPlusOne); // 9007199254740991000000
console.log(typeof maxIntegerPlusOne); // number
console.log(typeof random); // number

// Example 3