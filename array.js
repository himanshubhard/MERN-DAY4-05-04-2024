const msg=()=>console.log("Arrow Function");
let data=[10,20,30,40,50.34,"kiet",msg];
console.log(data);
data[6]();              
data.forEach(value=>console.log(`value of array=${value}`));
// for(let value of data){                        newest rule
//     console.log(`value of array=${value}`);
// }                        
// for(let index in data){                         new rule
//     console.log(`vale of ${index} is ${data[index]}`);
// }
// for(let i=0;i<data.length;i++){                 older rule

//     console.log(`Value of ${i} is ${data[i]}`);

// }