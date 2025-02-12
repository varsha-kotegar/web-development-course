//variable/function hoisting and function call

sayHii("Varsha");

function sayHello(myName){
    console.log("Hello " + myName);
}

function sayHii(myName){
    console.log("Hii " + myName);
}
{
console.log(age);
var age = 20;
}

function greetMe (greet, fullname){
    console.log("Hello " + fullname);
    greet();
}
function greet(){
    console.log("Greetings of the day!! ");
}
greetMe(greet, "Varsha");

const arr = [
    function (a,b){
        return a+b;
    },
    function (a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    }
];

let first = arr[0]; //arr[1] for subtraction, arr[2] for multiplication
let ans = first(10,5);
console.log(ans);

let obj = {
    age : 19,
    wt:43,
    ht: 153,
    greet : () => {
        console.log("Hello Dunia ");
    }
}
console.log(obj.age);
obj.greet();

