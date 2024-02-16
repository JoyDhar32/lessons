// javascript type conversion
// 1. String()
// 2. Number()
// 3. Boolean()

// 1. Boolean to String
let value = true;
console.log(value, 'and type is', typeof value);
value = String(value);
console.log(value, 'and type is', typeof value);

// 2. Number to String
let num = 123;
console.log(num, 'and type is', typeof num);
num = String(num);
console.log(num, 'and type is', typeof num);

// 3. String to Number
let str = "123";
console.log(str, 'and type is', typeof str);
str = Number(str);
console.log(str, 'and type is', typeof str);

// 4. Boolean to Number
let bool = true;
console.log(bool, 'and type is', typeof bool);
bool = Number(bool);
console.log(bool, 'and type is', typeof bool);

// 5. String to Boolean
let str1 = "true";
console.log(str1, 'and type is', typeof str1);
str1 = Boolean(str1);
console.log(str1, 'and type is', typeof str1);

// 6. Number to Boolean
let num1 = 1;
console.log(num1, 'and type is', typeof num1);
num1 = Boolean(num1);
console.log(num1, 'and type is', typeof num1);

// ⭐ Type Conversion ⭐

