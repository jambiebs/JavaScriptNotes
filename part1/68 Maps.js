// // start from here dated: December 13, 2022
// // // Maps

// // // map is an iterable

// // // store data in ordered fashion

// // // store key value pair (like object)
// // // duplicate keys are not allowed like objects


// // // different between maps and objects

// // // objects can only have string or symbol
// // // as key 

// // // in maps you can use anything as key
// // // like array, number, string 

// // // object literal 
// // // key -> string 
// // // key -> symbol
// // // const person = {
// // //     firstName : "harshit",
// // //     age: 7,
// // //     1:"one"
// // // }
// // // // console.log(person.firstName);
// // // // console.log(person["firstName"]);
// // // // console.log(person[1]);
// // // for(let key in person){
// // //     console.log(typeof key);
// // // }

// // // key value pair 
// // // const person = new Map();
// // // person.set('firstName', 'Harshit');
// // // person.set('age', 7);
// // // person.set(1,'one');
// // // person.set([1,2,3],'onetwothree');
// // // person.set({1: 'one'},'onetwothree');
// // // console.log(person);
// // // console.log(person.get(1));
// // // for(let key of person.keys()){
// // //     console.log(key, typeof key);
// // // }
// // // for(let [key, value] of person){
// // //     // console.log(Array.isArray(key));
// // //     console.log(key, value)
// // // }

// // // const person1 = {
// // //     id: 1,
// // //     firstName: "harshit"
// // // }
// // // const person2 = {
// // //     id: 2,
// // //     firstName: "harshta"
// // // }

// // // const extraInfo = new Map();
// // // extraInfo.set(person1, {age: 8, gender: "male"});
// // // extraInfo.set(person2, {age: 9, gender: "female"});
// // // console.log(userInfo);
// // // console.log(person1.id);
// // // console.log(extraInfo.get(person1).gender);
// // // console.log(extraInfo.get(person2).gender);



// // // practice

// // // map is a 2D array and set is 1D array
// // // 2D means it can store any key value pair unlike set
// // // it is an ordered array while set's arrangment is not guaranteed
// // // it uses element.set propeties to add new key pair while set uses element.add properties to add new value
// // // it can contain any key type (object,array, number, string)


// // // todo

// // // const anything = [1,2,3,4,5,6,45];
// // const anyThing = new Map();    // M should be in capital Map to work properly
// // anyThing.set({420 : "hello"},"onetowthtee");
// // anyThing.set('name','jamal');
// // anyThing.set("number", 1);
// // anyThing.set([1,2,3,4], "is an array");
// // console.log(anyThing.get("number"));   // use get method to fetch the value of key
// // console.log(anyThing.keys());    // use key method to print all the keys
// // for(let key of anyThing){
// //     console.log(key);
// // }
// // for(let [key,value] of anyThing){    // can destructor directly on for...of loop
// //     console.log([key]);
// //     console.log([value]);
// //     console.log([key,value]);
// // }
// // console.log(Array.isArray(anyThing));




// const person1 = {
//     firstName: "ajay",
//     Id: 420
// }
// const person2 = {
//     firstName: "vijay",
//     Id: 320
// }
// const extraDetail = new Map();
// extraDetail.set(person1, {nature: "chutiy"});
// extraDetail.set(person2, {nature: "mahachutiya"});
// // console.log(extraDetail);
// // console.log(extraDetail.nature); // this syntax will not work use get method
// // console.log(extraDetail.get(person1).nature);
// // console.log(extraDetail.get(person2).nature);
// for(let keys of extraDetail.keys()){
//     console.log(keys);
// }
// for(let [key, value] of extraDetail){
//     console.log(key,value);
// }

// const jamal = new Map([["firstname", "Jam"],["lastname", "Al"]]);
// jamal.set(["age", 27]);
// console.log(jamal);



// Maps

const anything = new Map();
anything.set("hello", "world!");
anything.set({who: "are you"});
anything.set("8x8","64");
console.log(anything);
const keys = anything.keys();
console.log(keys);
const values = anything.values();
console.log(values);