// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return 'toon na na na la la ';
//     }
// }
// function createUser(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethods);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.about());
// // console.log(user3.sing());


// let obj1 = {
//     a: 1,
//     b: 2
// }

// let obj2 = Object.create(obj1);
// obj2.c = 3;
// console.log(obj2);
// console.log(obj2.__proto__);
// console.log(obj1);

// function hello(){
//     console.log("hello prototype!");
// }
// hello.extra = "hello extra!"
// console.log(hello.prototype);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHello = function() {
//   console.log("Hello, my name is " + this.name);
// }

// var person1 = new Person("John", 30);
// var person2 = new Person("Jane", 25);

// person1.sayHello();
// person2.sayHello();
// // console.log(Person.prototype);

