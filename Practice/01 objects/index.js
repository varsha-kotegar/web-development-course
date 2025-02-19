/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Object: Computer 
const comp = {
    brand: "Apple",
    model: "MacBook Pro",
    year: 2020,
    specs: {
        processor: "Intel Core i7",
        memory: "16 GB",
        storage: "512 GB SSD",
    },
};

console.log(comp);
console.log("computer brand:", comp.brand);

// Object: Phone

const phone = {
    brand: "Apple",
    model: "iPhone 12",
    year: 2020,
    specs: {
        processor: "A14 Bionic",
        memory: "4 GB",
        storage: "256 GB",
    },
}

console.log("phone brand:", phone.brand);
//other ways to access the properties
console.log("phone model:", phone["model"]);
