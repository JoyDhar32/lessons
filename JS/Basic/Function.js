/*
Function:
A function is a block of code designed to perform a particular task.
A function is executed when "something" invokes it (calls it).
*/

// Example:
function myFunction() {
  console.log("Hello World!");
}

myFunction(); // Hello World!

// Example: Function with parameters
function myFunction2(name) {
  console.log("Hello " + name);
}

myFunction2("Joy"); // Hello John

// Example: Function with return value

function myFunction3(a, b) {
    return a * b;
    }

    let x = myFunction3(4, 3);
    console.log(x); // 12

// Example: Function with default parameter

function myFunction4(a, b = 3) {
    return a * b;
    }

    console.log(myFunction4(4)); // 12

// Example: Function with rest parameter

function myFunction5(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
    }

    console.log(myFunction5(1, 2, 3)); // 6

// Example: Arrow Function

const myFunction6 = (a, b) => a * b;
console.log(myFunction6(4, 3)); // 12

// Example: Function with arrow and rest parameter

const myFunction7 = (...args) => {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
    }

    console.log(myFunction7(1, 2, 3)); // 6

// Example: Function with arrow and default parameter

const myFunction8 = (a, b = 3) => a * b;
console.log(myFunction8(4)); // 12

//⭐Function in depth⭐




