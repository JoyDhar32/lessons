/*
Array Push: Add an element to the end of an array
The push() method adds a new element to an array (at the end), and returns the new length of the array.
Note: The new item(s) will be added at the end of the array.
*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); // Returns 5
console.log(fruits); // Returns ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
let last = fruits.push("Kiwi");
console.log(last); // Returns 6
console.log(fruits); // Returns ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Kiwi"]

// example
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys); // Concatenate (join) myGirls and myBoys

console.log(myChildren); // Returns ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// ⭐ Array push in depth ⭐