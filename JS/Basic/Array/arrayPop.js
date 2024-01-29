/*
Array Pop: Remove the last element of an array
The pop() method removes the last element of an array, and returns that element.
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); // Removes "Mango" from fruits and returns it
console.log(fruits); // Returns ["Banana", "Orange", "Apple"]

let last = fruits.pop();
console.log(last); // Returns "Apple"
console.log(fruits); // Returns ["Banana", "Orange"]

// example
let myGirls = ["Cecilie", "Lone", "Tina"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys); // Concatenate (join) myGirls and myBoys
// ⭐ Array pop in depth ⭐
