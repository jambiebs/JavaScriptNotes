// // // what to practice
// // // 1. use case of proto and prototype
// // // 2. importance of new keyword



// // // const obj1 = {
// // //     value1: 55,
// // //     value2: 56
// // // }
// // // const obj2 = Object.create(obj1);
// // // obj2.value3 = 57;

// // // console.log(obj2.value1);
// // // console.log(obj2.__proto__);

// // // // prototype
// // // function func() {
// // //     console.log("hellow world!");
// // // }
// // // func();
// // // console.log(func.prototype);
// // // // check if prototype exit or not
// // // // prototype in function
// // // if (func.prototype) {
// // //     console.log("prototype present");
// // // } else {
// // //     console.log("prototype not present");
// // // }
// // // // prototype in array
// // // const array = [1, 2, 3, 4];
// // // if (array.prototype) {
// // //     console.log("prototype present");
// // // } else {
// // //     console.log("prototype not present");
// // // }
// // // conclusion
// // // prototype exit in function but it does not exit in array


// // // use of class in javascript

// // // class sudo {
// // //     constructor(firstName, lastName, age) {
// // //         this.firstName = firstName;
// // //         this.lastName = lastName;
// // //         this.age = age;
// // //     }
// // //     // whatThis(){
// // //     // console.log(this);
// // // // }
// // // about() {
// // //     return `user's name is ${this.firstName} ${this.lastName} and age is ${this.age}, ${this}`
// // // }
// // // adult() {
// // //     if (this.age >= 18) {
// // //         return `${this.firstName} ${this.lastName} is an adult!`;
// // //     } else {
// // //         return `${this.firstName} ${this.lastName} is not an adult.`;
// // //     }
// // // }
// // // }

// // // const user1 = new sudo("ajay", "kumar", 19);
// // // const user2 = new sudo("binod", "yadav", 16);
// // // const user3 = new sudo("paapu", "mandal", 44);
// // // console.log(user2.about());
// // // console.log(user2.adult());


// // // reduce method practice

// // const usercart =[
// //     {productName:"headphone",price:299},
// //     {productName:"charger",price:699},
// //     {productName:"Temperd glass",price:199}
// // ];

// // // const cartValue = usercart.reduce((x,y)=>{
// // //     return x+y.price;
// // // },0);
// // // console.log(cartValue);
// // function sum(x,y){
// //     return x + y.price;
// // }
// // console.log(usercart.reduce((sum),0));

// const numbers = [4, 1, 9, 10, 15, 22, 5, 14];
// const even = numbers.forEach((x)=>{
//     if(x%2===0){
//         console.log(x);
//     }
// });

const person = {
    firstName: "jamal",
    lastName: "Ansari",
    age: 28,
    about: function(){
        console.log(`name of the person is ${this.firstName} and age is ${this.age}`);
        console.log(this);
    }

}
person.about();