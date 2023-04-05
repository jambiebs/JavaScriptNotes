//syntax of function**********
// function functionName(param){logic writing;}

// function in var/const/let************
// const constName = function(param){logic writing;}

// arrow function****************
// const constName = (param) => {logic writing};

// iterate mean using {for in loop} and {object.keys}

// array destructuring mean storing individual item of some part of array to a single or multiple variables;

// practice callback function repteadly, it will increase your understanding of how function works;

// array method

// fill and splice are opposite to each other fill is used to add and splice is used to delete;

// we perform different-2 types of logical operations using function but with single element what if those element are inside of an array? in this situation we use array method by default it uses (value, index) so whatevere your need you can use your parameteres accordingly. array methods are like callback and loop functions. all the task we use using array methods can be performed using traditional for loop method:
// above information are based on my knowledge learnt till 13/10/2022. information required to be updated if found any new functionality.
// To revise javascript quickly use practice following topics:-
// 1.) if else
// 2.) for loop 
// 3.) for of loop 
// 4.) for in loop 
// 5.) ternery operator
// 6.) switch..case (break;)
// 7.) while loop


// difference between __proto__ and prototype


// In JavaScript, both __proto__ and prototype are related to the concept of prototypal inheritance, but they have different meanings and purposes.

// __proto__ is an internal property of an object that refers to its prototype. When you access a property or method on an object, JavaScript first checks if the property or method exists on the object itself. If it does not exist, JavaScript looks for the property or method on the object's prototype, and so on, until it finds the property or method or reaches the end of the prototype chain.

// Here is an example that demonstrates how __proto__ works:

var person = {
  name: "John"
};

var student = {
  age: 20
};

student.__proto__ = person;

console.log(student.name); // outputs "John"
// In this example, person is an object that has a name property. student is another object that has an age property. By setting student.__proto__ to person, we establish a prototype chain between student and person. Now, when we try to access the name property on student, JavaScript looks for the property on student first, and when it doesn't find it, it looks for the property on person, and finds it there.

// prototype, on the other hand, is a property of a constructor function that refers to the prototype object of the objects created by that constructor function. When you create a new object using a constructor function, the __proto__ property of the new object is set to the prototype property of the constructor function.

// Here is an example that demonstrates how prototype works:

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
}

var person1 = new Person("John");
var person2 = new Person("Jane");

person1.sayHello(); // outputs "Hello, my name is John"
// person2.sayHello(); // outputs "Hello, my name is Jane"
// In this example, Person is a constructor function that creates objects with a name property. The sayHello method is added to the Person.prototype object, so that all instances of Person created using the new keyword will have access to this method through the __proto__ property.

// In summary, __proto__ is a property of an object that refers to its prototype, while prototype is a property of a constructor function that refers to the prototype object of the objects created by that constructor function. They are both related to the concept of prototypal inheritance, but they have different purposes and uses.
