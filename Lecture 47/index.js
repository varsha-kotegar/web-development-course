//classes & def paramaters


class Human{

    //properties
    age = 19; //public
    #wt = 43; //private
    ht = 153;
    

    constructor(newAge, newHeight){
        this.age = newAge;
        this.ht = newHeight;
    }



    //behaviour
    walking(){
        console.log("I'm walking", this.#wt);
    }
    running(){
        console.log("I'm running");
    }

    get fetchWeight(){
        return this.#wt;

    }

    set modifyWeight(val){
        this.#wt = val;
    }
}

let obj = new Human(20,163);
console.log(obj.fetchWeight);
obj.walking();
obj.running();