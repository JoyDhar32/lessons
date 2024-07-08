const arr=[1,2,3,4,5,6,7,8,9,10];
const str=arr.toString(); // "1,2,3,4,5,6,7,8,9,10"
console.log(str);
console.log(arr)

console.log(`-----------------`)
const arr2=['a','aa','b','bb','c','cc','d','dd','e','ee'];
const str2=arr2.toString();
console.log(arr2);
console.log(str2);

console.log(`-----------------`)

console.log(`The type of arr is ${typeof arr}`);  // object
console.log(`The type of Str is ${typeof str}`); // string
console.log(`The type of arr2 is ${typeof arr2}`); // object
console.log(`The type of Str2 is ${typeof str2}`); // string
console.log(`The type of ${arr[0]} is ${typeof arr[0]}`); // number
console.log(`The type of ${arr2[0]} is ${typeof arr2[0]}`); // string

// ⭐ To String Function ⭐