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
console.log(Math.max(...AnimationEffectarrayy)); // 44
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