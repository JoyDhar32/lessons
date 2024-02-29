const finMax=(args)=> 
{
    let max= Math.max(...args);
    let min = Math.min(...args);
    return `Max value is : ${max} and Min value is : ${min}`;
}

console.log(finMax([1,2,3,4,5,6,7,8,9,10])); // 10
console.log(finMax([1,2,3,4,5,6,7,8,9,10,11,12,13,-14,15])); // 15
console.log(finMax([-1,2,3,4,5,6,7,8,9,1000,11,12,13,14,15,100])); // 1000
console.log(finMax([1,2,3,4,5,6,7,8,-9,10,11,12,13,14,15,100])); // 100

//⭐ Find Max Min Using Spread Operator ⭐