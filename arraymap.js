let value=[1,2,3,4,5,6,7,8,9,10];
value.push(11);
console.log(value);
// multiply by 10
value.map(item=>console.log(`value x 10 =${item*10}`));
// sum of all elements
let sumValue=value.reduce((a,b)=>a*b);
console.log(`sum of array=${sumValue}`);
//even number from array
let evenNum=value.filter(item=>item%2===0);
console.log(evenNum);