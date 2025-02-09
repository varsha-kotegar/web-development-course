// airthmatic operation     +   -   *   /   %   **
// uniary operator ++   --
// asignment operator   +=  -= *=   /=  
//comparision operator  >   <   >=  <=  ==  ===(both alue and data type should be same) !=  !==     -> true/false
//ternory operator      condn ? val1 : val2;
//logical operator      &&  ||  !
//bitwise operator      &   |   ~   ^   <<  >>
let a = 10;
let b = 5;

console.log(a+b);
console.log(a++);
console.log(a);
a += 10; 
console.log(a);

//comparision operator
console.log(a>b);
console.log(5 == 5);    //true
console.log('5' == 5);  //true
console.log('5' === 5);  //false


//ternory operator
let age = 25;
let status1 = (age>18) ? 'Yeah, I can Vote' : 'Ahh, I can\'t vote';
console.log(status1);

console.log(6 & 5);     // 110 & 101 =  100 (4)


//Conditionals      if    if-else     if-else-if     switch  


if(age>=18){
    console.log('can vote');
}
else{
    console.log('can\'t vote');
}