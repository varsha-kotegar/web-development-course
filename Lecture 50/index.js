//compile time error

//syntax error
//console.log(1;


//runtime error
//reference error
//console.log(x);

try{
        console.log("try block starts here");
        console.log(x);
        console.log("try block starts here");
}
catch(err){
        console.log("I am inside catch block");
        console.log(" Your error is here :", err);
}
finally{
    console.log("I will run Everytime and I'n a finally block !");
}

//let's create custom error
try{
    console.log(x);
}
catch(errr){
    throw new Error("First declare then prints ");
}

let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}