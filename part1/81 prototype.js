// // function hello(){
// //     console.log("hello world");
// // }

// // // javascript function ===> function  + object

// // // console.log(hello.name);

// // // you can add your own properties 
// // // hello.myOwnProperty = "very unique value";
// // // console.log(hello.myOwnProperty);

// // // name property ---> tells function name;

// // // function provides more usefull properties.


// // // console.log(hello.prototype); // {}

// // // only functions provide prototype property

// // // hello.prototype.abc = "abc";
// // // hello.prototype.xyz = "xyz";
// // // hello.prototype.sing = function(){
// // //     return "lalalla";
// // // };
// // // console.log(hello.prototype.sing());


// prototype
// what is prototype: prototype is an empty object that comes with a function; 
const pro_toto = { // object
    hello: "there"
}
const array = [1, 2, 3];

const bye = "goodbye";

function hello() {
    console.log("this is an example of prototype");
}
if (pro_toto.prototype) {
    console.log("prototype is present");
} else {
    console.log("prototype is not present")
};
// by using "pro_toto.prototype", "array.prototype", "bye.prototype" we get the else result("prototype is not present"), so it proves that only function provide prototype; 



















