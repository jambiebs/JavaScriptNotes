// // // // getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// // console.log(person1.fullName());
// // console.log(person1.fullName);
person1.fullName = "mohit vashistha";
console.log(person1.fullName);



// // use of set method in class;
// The set method can be useful in situations where you want to perform some logic or validation when setting the value of a property. For example, you might want to ensure that the fullName property is always in a certain format, or that it does not exceed a certain length. In these cases, you could use a set method to handle these requirements.

// class setMethod{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){ // we can achieve the same output using get method so in this case set method is not useful but there are other use cases, see example below;
//         const[firstName, lastName] = fullName.split(" ")
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// const user = new setMethod("Md Jamal", "Uddin", 27);
// console.log(user.fullName); // output is undefined
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);


// // use case of set method


// class User54 {
//     constructor(name, age) {
//       this._name = name;
//       this._age = age;
//     }
  
//     get name() {
//       return this._name;
//     }
  
//     set name(name) {
//       if (!name || name.length > 30) {
//         throw new Error('Invalid name');
//       }
//       this._name = name;
//     }
//   }
  
//   const user540 = new User54('John', 30);
  
//   try {
//     user540.name = ''; // this will throw an error
//   } catch (e) {
//     console.error(e.message); // output: "Invalid name"
//   }
  



// //   another use case of set method

// class Circle {
//     constructor(radius) {
//       this._radius = radius;
//       this._diameter = radius * 2;
//     }
  
//     get radius() {
//       return this._radius;
//     }
  
//     set radius(radius) {
//       this._radius = radius;
//       this._diameter = radius * 3;
//     }
//   }
  
//   const circle = new Circle(10);
//   console.log(circle.radius); // output: 10
//   console.log(circle._diameter); // output: 20
  
//   circle.radius = 20; // set method applied to this one
//   console.log(circle.radius); // output: 20
//   console.log(circle._diameter); // output: 60
  