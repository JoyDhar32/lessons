/*Variable hoisting is a behavior in JavaScript where variable and function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase, before the actual code is executed. This means that regardless of where variables and functions are declared in your code, they are moved to the top of their scope, allowing you to use them before they are formally declared in the code.*/

/*Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the actual code is executed.

Let's break it down:

Declaration vs. Initialization:

Declaration: This is when you announce that a variable or function exists. For example: var x; or function myFunction() {}.
Initialization: This is when you assign a value to a variable or define the behavior of a function. For example: x = 5; or function myFunction() { console.log("Hello!"); }.
Hoisting with var Declarations:

When you declare a variable using var, the declaration is hoisted to the top of its scope. However, the initialization (assigning a value) remains in its original position.*/


console.log(x);  // undefined
var x = 5;

//During hoisting, this is interpreted as:

var x;
console.log(x);  // undefined
x = 5;

/*In summary, hoisting is a behind-the-scenes behavior in JavaScript that moves declarations to the top of the scope. It's important to be aware of this behavior to write code that behaves as expected*/
