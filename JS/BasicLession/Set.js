let arr = [1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 1];
console.log(`Array: ${arr}`); // Array: 1,2,3,3,4,5,6,6,6,7,,1
let set = new Set(arr);
console.log(`Set: ${set}`); // Set: 1,2,3,4,5,6,7,undefined
console.log(set);

// set add method
set.add(8);
console.log(set); // Set: 1,2,3,4,5,6,7,8
set.add(8);
console.log(set); // Set: 1,2,3,4,5,6,7,8

// set delete method
set.delete(8);
console.log(set); // Set: 1,2,3,4,5,6,7
set.delete(8);
console.log(set); // Set: 1,2,3,4,5,6,7

// set has method
console.log(set.has(1)); // true
let pivot = 4;
console.log(set.has(pivot) ? 'set has ' + pivot : 'set does not have ' + pivot); // set does not have 8

// set size method
console.log(set.size); // 7
// set clear method

// summation of all element
let sum = [...set].reduce((a, b) => a + b, 0);
console.log(`The Summation of : ${[...set]} is = ${sum}`); // 28

set.clear();
console.log(set); // Set: undefined

// ⭐ Set in depth ⭐