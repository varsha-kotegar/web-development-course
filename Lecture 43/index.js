// //Functions     : function functionname(){ }

// function sayMyName(){
//     console.log("Varsha");
// }
// sayMyName();

// //with parameter
// function printNumber(num){
//     console.log("Printing Number",num);
// }
// printNumber(50);

//return function
// function getSum(a,b,c){
//     let sum = a + b + c;
//     return sum;
// }
// let ans = getSum(2,3,4);
// console.log("Printing Sum : ",ans);


//different way of declaring function
let squareNumber = function (num){
    let ans = num*num;
    return ans;
}

let anss = squareNumber(5);
console.log(anss);

//arrow function - provide concise syntax 
let powerNumber =  (num,exp) => {
    let ans = num**exp;
    return ans;
}

let pow = powerNumber(5,3);
console.log(pow);