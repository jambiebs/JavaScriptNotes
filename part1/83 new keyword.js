// // new keyword 
// // 1.) this = {}
// // 2.) return {} 
// //

// // __proto__ 
// // // official ecmascript document
// // [[prototype]]

// // constructor function 
// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());

// practice
// what new keyword do?
// 1.) this = {};
// 2.) sets value and return;
// 3.) __proto__ === prototype; 


function multiple(firstName, lastName, age, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
}
    multiple.prototype.about =  function () {
        return (`${this.firstName}, ${this.lastName}, ${this.age}, ${this.height}`);
    },
    multiple.prototype.is18 =  function () {
        return this.age >= 18;
    },
    multiple.prototype.tall = function () {
        return this.height >= 5;
    }


const user1 = new multiple("jamal", "uddin", 19, 6);
const user2 = new multiple("ajay", "devegan", 54, 4.9);
const user3 = new multiple("salman", "khan", 56, 5.8);
console.log(user2.about());
console.log(user2.is18());
console.log(user2.tall());

















