// //Temporal dead zone in JS


console.log(marks);     //line 4 - 7 is a temporal dead zone which gives error 
console.log("Varsha");
console.log("Kotegar");
let marks = 100;
console.log(marks);

function sayHello(){
    let fullName = "Mother Earth";
    console.log("Hello Dunia", fullName);
}
console.log(fullName);
sayHello();