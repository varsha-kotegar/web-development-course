//Object cloning & garbage collection
//Object cloning 1. Spread method (...)      2. assign -> dest = Object.assign({},src)       3. Iteration

let obj = {
    age:19,
    wt:43,
    ht:153
};
console.log(obj);
obj.color = "Violet";
console.log(obj);

let src = {
    age: 19,
    ht:153,
    favNo: 3
};

let dest = {...src}; //cloning
//dest = src;
console.log("Source : ", src);
console.log("destination : ", dest);

src.colour = "Violet";
console.log("Source : ", src);
dest.colour = "White";
console.log("destination : ", dest);


//Method 2
 dest = Object.assign({},src);
console.log("Source : ", src);
console.log("destination : ", dest);

//Method 3 
dest = {};
//cloning using iteration 
for( let key in src){
        let newKey = key;
        let newValue = src[key];
        dest[newKey] = newValue
}
console.log("Source : ", src);
console.log("destination : ", dest);