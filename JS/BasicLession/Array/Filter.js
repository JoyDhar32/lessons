let evenNumbers =(arr)=>{
    let even=arr.filter((num)=>{return num%2===0});
    return even;
}

console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10])); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers([1,3,5,7,9])); // []

// Summation of Even Numbers;

let sumEvenNumbers=(arr)=>{
let evenNumbers=arr.filter((even)=>{return even%2===0});
let evenSummation=evenNumbers.reduce((accumulator,currentValue)=>{return accumulator + currentValue},0);
return evenSummation;
}
console.log(`----------------- Even Numbers Summation -----------------`)
console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10])); // 30
console.log(sumEvenNumbers([1,3,5,7,9])); // 0
console.log(`${sumEvenNumbers([2,4,6,8,10])}`); // 30