// to understand __proto__ watch the example starting from line no 27;
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// // __proto__

// // offical ecmascript documentation 

// // [[prototype]]

// // __proto__ , [[prototype]]



// // prototype    

// const obj2 = Object.create(obj1); // {}
// // there is one more way to create empty object
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2);

// console.log(obj2.__proto__);

// __proto__
// proto is a refrence of another object; 
const one = {
    id1 : "one", 
    id2 : "two",
    id3 : "three"
}
const two = Object.create(one);
two.id4 = "four";

console.log(two["id1"]);
console.log(two);
console.log(one);

















