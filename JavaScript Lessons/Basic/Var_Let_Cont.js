/*
Var, Let, and Const
In JavaScript, let, var, and const are used for variable declarations, but they have some key differences in terms of scope, hoisting, and reassignment. Here's a summary of their differences:
var:

Scope: Variables declared with var are function-scoped. They are visible throughout the entire function in which they are declared.

Hoisting: Variable declarations using var are hoisted to the top of their function or global scope. However, only the declaration is hoisted, not the initialization.

Reassignment: Variables declared with var can be redeclared and reassigned.
*/

// example 1
console.log(`Var Example:`)
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable
        console.log(x);  // 2
    }
    console.log(x);  // 2
    }
varTest();

/*let:

Scope: Variables declared with let are block-scoped. They are only visible within the block (or statement) where they are declared.

Hoisting: Variable declarations using let are hoisted to the top of their block, but unlike var, they are not initialized until the actual declaration is encountered in the code. This results in the "temporal dead zone" where accessing the variable before declaration throws a ReferenceError.

Reassignment: Variables declared with let can be reassigned, but not redeclared within the same scope.
*/

// example 2
console.log(`\nLet Example:`)
function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
    }
letTest();

/*
const:
Scope: Like let, variables declared with const are block-scoped.

Hoisting: Similar to let, const declarations are hoisted to the top of their block, but they are not initialized until the actual declaration is encountered.

Reassignment: Variables declared with const cannot be reassigned after they are initialized. They must be assigned a value at the time of declaration.
*/

// example 3
console.log(`\nConst Example:`)
function constTest() {
    const x = 1;
    if (true) {
        const x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
    }