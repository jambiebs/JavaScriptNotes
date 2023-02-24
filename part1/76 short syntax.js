// making a function inside object but not inside a key pair value
// function inside object are called method and we can directly declare a function instead of assigning it to a key pair;
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



// user1.about();














// try yourself

const user1 = {
    firstName: "jamal",
    lastName: "uddin",
    age: 27,  // using this comma is necessary 
    about() {
        console.log(`user's name is ${this.firstName}${this.lastName} and age is ${this.age}`);
    }
}

const user2 = {
    firstName: "jamal",
    lastName: "uddin",
    age: 27,  // using this comma is necessary 
    about: function() {
        console.log(`user's name is ${this.firstName}${this.lastName} and age is ${this.age}`);
    }
}

user1.about(); // both will give the same output and works same
user2.about(); // both will give the same output and works same
