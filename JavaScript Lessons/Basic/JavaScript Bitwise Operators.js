/*
Bitwise And (&):
0 & 0 = 0
*/
// Example
console.log("*** \nBitwise AND ***");
function checkBitwiseAnd(a, b) {
    return a&b; 
}
console.log(checkBitwiseAnd(0, 0)); // Output: 0
console.log(checkBitwiseAnd(0, 1)); // Output: 0
console.log(checkBitwiseAnd(5, 3)); // // 0101 & 0011 = 0001 (Decimal: 1)

/*
Bitwise Or (|):
0 | 0 = 0
*/
// Example
console.log("*** \nBitwise OR ***");
function checkBitwiseOr(a, b) {
    return a|b; 
}
console.log(checkBitwiseOr(0, 0)); // Output: 0
console.log(checkBitwiseOr(0, 1)); // Output: 1
console.log(checkBitwiseOr(5, 3)); // // 0101 | 0011 = 0111 (Decimal: 7)

/*
Bitwise Xor (^):
0 ^ 0 = 0
*/
// Example
console.log("*** \nBitwise XOR ***");
function checkBitwiseXor(a, b) {
    return a^b; 
}
console.log(checkBitwiseXor(0, 0)); // Output: 0
console.log(checkBitwiseXor(0, 1)); // Output: 1
console.log(checkBitwiseXor(5, 3)); // // 0101 ^ 0011 = 0110 (Decimal: 6)

/*
Bitwise Not (~):
~0 = -1
*/
// Example
console.log("*** \nBitwise NOT ***");
function checkBitwiseNot(a) {
    return ~a; 
}
console.log(checkBitwiseNot(0)); // Output: -1
console.log(checkBitwiseNot(1)); // Output: -2
console.log(checkBitwiseNot(5)); // // ~0101 = 1010 (Decimal: 10)

/*
Bitwise Left Shift (<<):
0 << 0 = 0
*/
// Example
console.log("*** \nBitwise Left Shift ***");
function checkBitwiseLeftShift(a, b) {
    return a<<b; 
}
console.log(checkBitwiseLeftShift(0, 0)); // Output: 0
console.log(checkBitwiseLeftShift(0, 1)); // Output: 0
console.log(checkBitwiseLeftShift(5, 3)); // // 0101 << 3 = 0101000 (Decimal: 40)

/*
Bitwise Right Shift (>>):
0 >> 0 = 0
*/
// Example
console.log("*** \nBitwise Right Shift ***");
function checkBitwiseRightShift(a, b) {
    return a>>b; 
}
console.log(checkBitwiseRightShift(0, 0)); // Output: 0
console.log(checkBitwiseRightShift(0, 1)); // Output: 0
console.log(checkBitwiseRightShift(5, 3)); // // 0101 >> 3 = 0000 (Decimal: 0)
console.log(checkBitwiseRightShift(5, 2)); // // 0101 >> 2 = 0001 (Decimal: 1)
/*

The expression 1010 >> 3 represents a right shift operation by 3 positions on the binary number 1010. Let's break down the operation:

The expression `1010 >> 3` represents a right shift operation by 3 positions on the binary number `1010`. Let's break down the operation:

1. Convert `1010` to its decimal equivalent: \(1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 = 8 + 0 + 2 + 0 = 10\).

2. Perform the right shift operation by 3 positions on the decimal value: \(10 >> 3\).

The result will be \(10 \div 2^3 = 10 \div 8 = 1\) with a remainder of 2.

Therefore, the output will be 1.
*/