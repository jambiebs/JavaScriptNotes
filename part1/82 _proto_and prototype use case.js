// // const userMethods = {
// //     about : function(){
// //         return `${this.firstName} is ${this.age} years old.`;
// //     },
// //     is18 : function(){
// //         return this.age >= 18;
// //     },
// //     sing: function(){
// //         return 'toon na na na la la ';
// //     }
// // }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());

// practice

function multiple(firstName, lastName, age, height) {
    const user = Object.create(multiple.prototype); // this line is creating a link between user and multiple.prototype variable;
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.height = height;
    return user;
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


const user1 = multiple("jamal", "uddin", 19, 6);
const user2 = multiple("ajay", "devegan", 54, 4.9);
const user3 = multiple("salman", "khan", 56, 5.8);
console.log(user2.about());
console.log(user2.is18());
console.log(user2.tall());


















