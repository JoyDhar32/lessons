let arr=[1,2,3,3,4,5,6,6,6,7,1];
console.log(`Array: ${arr}`); // Array: 1,2,3,3,4,5,6,6,6,7,,1
let set = new Set(arr);
console.log(`Set: ${set}`); // Set: 1,2,3,4,5,6,7,undefined
console.log(set);