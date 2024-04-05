let studentInfo={
    rollno:1,
    name:"Ravi",
    course:"mca",
    college:"kiet",
    marks:[10,23,45],
    music:()=>console.log("Play music"),
    play:function playfun(){console.log("Play")},
}
let arrayvalue=[studentInfo,studentInfo,studentInfo];
arrayvalue.forEach(item=>console.log(item,name));
console.log(studentInfo.music());
console.log(studentInfo.play());