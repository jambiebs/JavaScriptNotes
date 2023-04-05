// // class Animal {
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age;
// //     }

// //     eat(){
// //         return `${this.name} is eating`;
// //     }

// //     isSuperCute(){
// //         return this.age <= 1;
// //     }

// //     isCute(){
// //         return true;
// //     }
// // }

// // class Dog extends Animal{

// // } 

// // const tommy = new Dog("tommy", 3);
// // console.log(tommy);
// // console.log(tommy.isCute());




// // practice
// class Animal {
//     constructor(type, name, age) {
//         this.type = type;
//         this.name = name;
//         this.age = age;
//     }
//     about() {
//         return `${this.name} is a ${this.type} and his age is ${this.age}`;
//     }
//     isCute() {
//         return true;
//     }

// }
// const pet1 = new Animal("Dog", "Tommy", 5);
// console.log(pet1.about());


// class cat extends Animal {
//     constructor(type, name, age, color) {
//         super(type, name, age);
//         this.color = color;
//     }
//     petcolor() {
//         return `color of ${this.name} is ${this.color}`;
//     }
//     isCute(){
//         return "value of this method has changed";
//     }
//     get isSuperCute(){
//         return true;
//     }

// }
// const pet2 = new cat("cat", "pussy", 2, "black");
// console.log(pet2.about());
// console.log(pet2.petcolor());
// console.log(pet2.isCute());
// console.log(pet2.isSuperCute);


class Product {
    constructor(brand,price){
        this.brand = brand;
        this.price = price;
    }
    affordable(){
        return this.price<2000;
    }
    detail(){
        return `${this.brand} is the best product in term of quality that cost you only ${this.price} INR`
    }
}

let earpod = new Product("Mivi", 1800); 
console.log(earpod);
console.log(earpod.affordable());
console.log(earpod.detail());

class Samsung extends Product{
    constructor(brand,price,type){
        super(brand,price);
        this.type = type;
    }
    detail(){
        return `${this.brand} is the best ${this.type} in term of sound quality that cost you only ${this.price} INR`
    }
}
let samsung = new Samsung("samsung",2100, "Earpod");
console.log(samsung.detail());
console.log(samsung.affordable());
