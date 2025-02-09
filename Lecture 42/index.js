//Loops and String 

// for(initialization; condition; updation);
let i;
for( i=10; i>0;i--){
    console.log(i);
}
//break
for(i=0;i<5;i++){
    if(i==3)
        break;
    console.log(i);
}

//continue

for(i=0;i<=5;i++){
    if(i==3)
        continue;
    console.log(i);
}

//while

//do-while

//string

let firstName = 'Varsha';
let lastName = 'Kotegar';

let name = `I'll
be 
a 
greatest
person 
:)`;

console.log(name);

let myname = new String("Varsha Kotegar");
console.log(myname);


//Operations
let op1 = ' Kannada';
let op2 = 'Kundapura';

let ans = op2 + op1;      //Output : Kundapura Kannada
console.log(ans);
let finalAns = `${op1} + ${op2}`;      //Output :  Kannada + Kundapura
console.log(finalAns);
let fAns = `${op1}${op2}`;      //Output :  KannadaKundapura
console.log(fAns);
let finalAnswer = `${op1} and ${op2}`;      //Output : Kannada and Kundapura
console.log(finalAnswer);
console.log(finalAnswer.length);            //length
console.log(op1.toUpperCase());            //Upper


let str = 'Varsha is an Ambitious Girl';
console.log(str.substring(2,4));

let words = console.log(str.split(' '));    //Output : [ 'Varsha', 'is', 'an', 'Ambitious', 'Girl' ]
//join
