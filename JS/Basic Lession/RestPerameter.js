// Rest PeraMeter
// 1. Rest perameter is used to get the multiple values in a single variable.
// 2. It is used to get the remaining elements of an array.

// Syntax
// function functionName(...args) {
// difference between rest perameter and spread operator
// 1. Rest perameter is used to get the multiple values in a single variable.
// 2. Spread operator is used to spread the elements of an array or an object.


// example

function sum(...args) {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return `The values are : ${args}, the length of the array is <br> ${args.length}  and the sum is : ${result}`;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)); // 66
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, -12)); // 54