/*
Static keyword is used to create static methods in a class. Static methods are those methods which are called on class itself, not on the object of the class. Static methods are defined using static keyword. Static methods are also known as class methods.
*/

class testStatic {
    static staticMethod() {
        console.log("This is a static method");
    }
    static name = "static variable";
    static sum(a, b) {
        return a + b;
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    add(a, b) {
        return a + b;
    }
    sub() {return this.a - this.b};
    mul() {return this.a * this.b};
    div() {return this.a / this.b};


}

testStatic.staticMethod(); // This is a static method
console.log(testStatic.name); // static variable
console.log(testStatic.sum(2, 2));
let obj = new testStatic(5,3); // object created with constructor values
console.log(obj.add(2, 22)); 
console.log(obj.sub());
console.log(obj.mul());
console.log(obj.div());

// ⭐Static, Constructor & Local Properties⭐
