// // // methods
// // // function inside object

// // function personInfo(){
// //     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// // }

// // const person1 = {
// //     firstName : "harsh",
// //     age: 8,
// //     about: personInfo
// // }
// // const person2 = {
// //     firstName : "mohit",
// //     age: 18,
// //     about: personInfo
// // }
// // const person3 = {
// //     firstName : "nitish",
// //     age: 17,
// //     about: personInfo
// // }

// // person1.about();
// // person2.about();
// // person3.about();





// // practice

// // const person = {
// //     firstName: "Jam_Al",
// //     age: 27,
// //     about: function(){
// //         console.log(`person name is ${person.firstName} and person's age is ${person.age}`);
// //     }
// // }
// // person.about();

// // using this
// // this is a function that call an element inside object this litrelly mean object and object is defined when this is inside a object so instead calling object we can use this and thus object = this see example below;
// // this => this object
// // const person = {
// //         firstName: "Jam_Al",
// //         age: 27,
// //         about: function(){
// //             console.log(`person name is ${this.firstName} and person's age is ${this.age}`);
// //         },
// //         about2: function(){
// //             console.log(this);  // same output as person
// //             console.log(person); // same output as this
// //             console.log(this.firstName, person.firstName); // both gives same output
// //         }
// //     }
// //     person.about();
// //     person.about2();


// // refrenced functions

// // const userInfo = function () {
// //     console.log(`name of ${this.person} is ${this.name} and age is ${this.age}`);
// // }

// // const person1 = {
// //     person: "person1",
// //     name: "md jamal",
// //     age: 27,
// //     printDetail: userInfo  //()
// // }
// // const person2 = {
// //     person: "person2",
// //     name: "ajay",
// //     age: 28,
// //     printDetail: userInfo  //()
// // }
// // const person3 = {
// //     person: "person3",
// //     name: "vijay",
// //     age: 30,
// //     printDetail: userInfo  //()
// // }
// // person1.printDetail();
// // person2.printDetail();
// // person3.printDetail();
// // userInfo();     <=this functions returns undefined


// // what is method?
// // fucntion inside object is called method
// // what is "this" keyword?
// // "this" keyword is like the object itself for example:-

// const person245 = {
//     nature: "angry",
//     mood: "unpredictable",
//     current_status: "stable",
//     // about: function(){
//     //     console.log(`nature of person245 is ${this.nature}, mood is ${this.mood} and status is ${this.current_status}`);
//     // },
//     what_is_this: function(){
//         console.log(this);
//     }
// }
// console.log(person245);
// // person245.about();
// person245.what_is_this(); // the output of this line and line no 108 is same so it proves that this keyword is same like the object inside which, it is mentioned or by which, object it is called;



const userInfo = function () {
    console.log(`name of ${this.id} is ${this.name} and age is ${this.age}`);
}

const person1 = {
    id: "581",
    name: "md jamal",
    age: 27,
    printDetail: userInfo
}
const person2 = {
    id: "582",
    name: "ajay",
    age: 28,
    printDetail: userInfo
}
const person3 = {
    id: "583",
    name: "vijay",
    age: 30,
    printDetail: userInfo
}
person1.printDetail();
person2.printDetail();
person3.printDetail();
console.log("");
console.log("************Print All User's Detail In One Click*************");
console.log("");
// by using below method you can print all the user's detail in one click;
const people = [person1, person2, person3];
for(let person of people){
    person.printDetail();
}