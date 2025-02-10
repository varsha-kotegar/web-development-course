// //Objects and Arrays
// let obj = {
//     name : "Varsha",
//     "full name": "Varsha Kotegar",
//     age: 19,
//     weight: "43kg",
//     height: "152cm",
//     greet: function(){
//         console.log("Hello jee kaise ho ");
//     }
// };

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));

// //creation of array 

// let arr = [1,2,3,4,5];
// console.log(arr);

// //array constructor
// let brr = new Array('Varsha', 1, true);
// console.log(brr);


// console.log(brr[0]);
// console.log(typeof(arr));   //object
// console.log(typeof(brr));   //object

// built-in methods
//      - push  -pop    -shift  -unshift    -slice  -splice     -map    -filter -reduce     - sort      -indexof        -findA

//let brr = new Array('Varsha', 1, true);
// console.log(brr);       //Output : [ 'Varsha', 1, true ]
// brr.push('Kotegar');    //insert at end
// console.log(brr);       //Output : [ 'Varsha', 1, true, 'Kotegar' ]
// brr.pop();      //removes last item
// brr.shift();    //leftmost item will be deleted
// brr.unshift('Varsha Kotegar');      //item will be added on left side

// brr.push(20);
// brr.push(30);
// brr.push(40);

// console.log(brr.slice(2,4));
// brr.splice(2,3,'40');
// console.log(brr);  

// let arrayy = [10,20,30];
// let ansArray = arrayy.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);
// let arryy = [10,20,30];
// let anSArray = arryy.map((number,index)=>{
//     console.log(number+1);
//     console.log(index);

// })
// console.log(anSArray);


// //map
// let eArray = [10,20,30,44,53,67,15,66,69];

// let evenArray = eArray.filter((num) =>{
//     if(num%2 === 0)
//         return true;
//     else
//     return false;
// });
// console.log(evenArray);