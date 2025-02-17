//Objects and Arrays
let obj = {
    name : "Varsha",
    "full name": "Varsha Kotegar",
    age: 19,
    weight: "43kg",
    height: "152cm",
    greet: function(){
        console.log("Hello jee kaise ho ");
    }
};

console.log(obj.name);

//for-in loop
for(let key in obj){
    console.log(key, " ", obj[key]);
}
console.log(obj);
obj.greet();

console.log(typeof(obj));

//creation of array 

let arr = [1,2,3,4,5];
console.log(arr);

//array constructor
let brrr = new Array('Varsha', 1, true);
console.log(brrr);


console.log(brr[0]);
console.log(typeof(arr));   //object
console.log(typeof(brr));   //object

//built-in methods
//     - push  -pop    -shift  -unshift    -slice  -splice     -map    -filter -reduce     - sort      -indexof        -findA

let brr = new Array('Varsha', 1, true);
console.log(brr);       //Output : [ 'Varsha', 1, true ]
brr.push('Kotegar');    //insert at end
console.log(brr);       //Output : [ 'Varsha', 1, true, 'Kotegar' ]
brr.pop();      //removes last item
brr.shift();    //leftmost item will be deleted
brr.unshift('Varsha Kotegar');      //item will be added on left side

brr.push(20);
brr.push(30);
brr.push(40);

console.log(brr.slice(2,4));
brr.splice(2,3,'40');
console.log(brr);  

let arrayy = [10,20,30];
let ansArray = arrayy.map((number)=>{
    return number*number;
})
console.log(ansArray);
let arryy = [10,20,30];
let anSArray = arryy.map((number,index)=>{
    console.log(number+1);
    console.log(index);

})
console.log(anSArray);


//map
let eArray = [10,20,30,44,53,67,15,66,69];

let evenArray = eArray.filter((num) =>{
    if(num%2 === 0)
        return true;
    else
    return false;
});
console.log(evenArray);
//reduce



let rrArray = [10,20,30,40,50];
let sums = rrArray.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sums);

//sort
let sArray = [10,20,30,40,50,44,14,64,23,42];
let aaa = sArray.sort();
console.log(sArray);

//sort in descending order
let bbb = sArray.sort((a,b)=>{
    return b-a;
});
console.log(bbb);

//indexof
let iArray = [10,20,30,40,50,60,70,80,90];
console.log(iArray.indexOf(30));

//findIndex
let fArray = [10,20,30,40,50,60,70,80,90];
console.log(fArray.findIndex((num)=>{
    return num>50;
}));

//find
let ffArray = [10,20,30,40,50,60,70,80,90];
console.log(ffArray.find((num)=>{
    return num>50;
}));


//reduce
let rArray = [10,20,30,40,50];
let sum = rArray.reduce((acc,curr)=>{
    return acc+curr;
},0);

//for
let fArr = [10,20,30];

let length = fArr.length;
console.log("length: ",length);

//traditional for loop
for(let index = 0; index< length; index++){
    console.log(fArr[index]);
}

//forEach
fArr.forEach((value, index) => {
    console.log("Number: ",value,"Index: ",index);
})

//for-of

let fullname = "Varsshhhhha"
for(let val of fullname){
    console.log(val);
}

