/*
Absolute Value: Math.abs(x)

*/
console.log(`Absolute Value: Math.abs(x)`);
console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10

/*
Math.ceil(x): Returns the smallest integer greater than or equal to a given number.
*/
console.log(`\nMath.ceil(x): Returns the smallest integer greater than or equal to a given number.`);
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.5)); // 2
console.log(Math.ceil(1.9)); // 2

/*
Math.floor(x): Returns the largest integer less than or equal to a given number.
*/
console.log(`\nMath.floor(x): Returns the largest integer less than or equal to a given number.`);
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.5)); // 1
console.log(~~1.9); // 1

/*
Math.round(x): Returns the value of a number rounded to the nearest integer.
*/
console.log(`\nMath.round(x): Returns the value of a number rounded to the nearest integer.`);
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.9)); // 2

/*
Math.max(x,y,z,...): Returns the largest of zero or more numbers.
*/
console.log(`\nMath.max(x,y,z,...): Returns the largest of zero or more numbers.`);
console.log(Math.max(1, 2, 3)); // 3
const arrayy = [1, 2, 3,4,44,5];
console.log(Math.max(...arrayy)); // 44
console.log(arrayy); // [1, 2, 3]
/*
Math.min(x,y,z,...): Returns the smallest of zero or more numbers.
*/

/*
Math.pow(x,y): Returns base to the exponent power, that is, base exponent.
*/
console.log(`\nMath.pow(x,y): Returns base to the exponent power, that is, base exponent.`);
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

/*
Math.sqrt(x): Returns the square root of a number.
*/
console.log(`\nMath.sqrt(x): Returns the square root of a number.`);
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5

/*
Math.random(): Returns a pseudo-random number between 0 and 1.
*/
console.log(`\nMath.random(): Returns a pseudo-random number between 0 and 1.`);
console.log(Math.random()); // 0.12345678912345678
console.log(Math.random()); // 0.23423423423423423
console.log(Math.floor(Math.random()*100)); // 0.34534534534534534

/*
Math.sign(x): Returns the sign of the x, indicating whether x is positive, negative or zero.
*/
console.log(`\nMath.sign(x): Returns the sign of the x, indicating whether x is positive, negative or zero.`);
console.log(Math.sign(10)); // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(90)); // 1

/*
Math.trunc(x): Returns the integer part of the number x, removing any fractional digits.
*/
console.log(`\nMath.trunc(x): Returns the integer part of the number x, removing any fractional digits.`);
console.log(Math.trunc(1.1)); // 1
console.log(Math.trunc(1.5)); // 1
console.log(Math.trunc(1.9)); // 1
console.log(Math.trunc(-1.1)); // -1
console.log(Math.trunc(-5.5)); // -5

/*
Math.E: Returns Euler's number e (approx. 2.718).
*/
console.log(`\nMath.E: Returns Euler's number e (approx. 2.718).`);
console.log(Math.E); // 2.718281828459045
console.log(Math.E.toFixed(2)); // 2.72

/*
Math.LN2: Returns the natural logarithm of 2 (approx. 0.693).
*/
console.log(`\nMath.LN2: Returns the natural logarithm of 2 (approx. 0.693).`);
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN2.toFixed(2)); // 0.69

/*
Math.LN10: Returns the natural logarithm of 10 (approx. 2.302).
*/
console.log(`\nMath.LN10: Returns the natural logarithm of 10 (approx. 2.302).`);
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LN10.toFixed(2)); // 2.30
