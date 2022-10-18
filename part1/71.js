// // methods
// // function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName : "mohit",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName : "nitish",
//     age: 17,
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();





// practice

// const person = {
//     firstName: "Jam_Al",
//     age: 27,
//     about: function(){
//         console.log(`person name is ${person.firstName} and person's age is ${person.age}`);
//     }
// }
// person.about();

// using this
// this is a function that call an element inside object this litrelly mean object and object is defined when this is inside a object so instead calling object we can use this and thus object = this see example below;
// this => this object
// const person = {
//         firstName: "Jam_Al",
//         age: 27,
//         about: function(){
//             console.log(`person name is ${this.firstName} and person's age is ${this.age}`);
//         },
//         about2: function(){
//             console.log(this);  // same output as person
//             console.log(person); // same output as this
//             console.log(this.firstName, person.firstName); // both gives same output
//         }
//     }
//     person.about();
//     person.about2();


// refrenced functions

const userInfo = function () {
    console.log(`name of ${this.person} is ${this.name} and age is ${this.age}`);
}

const person1 = {
    person: "person1",
    name: "md jamal",
    age: 27,
    printDetail: userInfo  //()
}
const person2 = {
    person: "person2",
    name: "ajay",
    age: 28,
    printDetail: userInfo  //()
}
const person3 = {
    person: "person3",
    name: "vijay",
    age: 30,
    printDetail: userInfo  //()
}
person1.printDetail();
person2.printDetail();
person3.printDetail();
// userInfo();     <=this functions returns undefined