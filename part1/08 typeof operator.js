// typeof operator 
// ---------------------
// data types (primitive data types)
// string "harhit"
// number 2, 4, 5.6 
// booleans 
// undefined
// null 
// BigInt
// Symbol

// let age = 22; 
// let firstName = "harshit";

// console.log(typeof age);

// // 22 -> "22"
// // convert number to string. 
// age = age + "";
// console.log(typeof(age)); "22"


// // convert string to number. 

// let myStr = +"34";
// console.log(typeof myStr);

// let age = "18";
// age = Number(age);
// console.log(typeof age);



// custom code by --jamal




// try yourself

// JavaScript types

//     Boolean type.
//     Null type.
//     Undefined type.
//     Number type.
//     BigInt type.
//     String type.
//     Symbol type



// Boolean type => true or false
// everything without a value is false
// let x = "";
// let y = 0;
// let z = "yes";
// let a = 10;
// console.log(Boolean(z));

// null type => The value null represents the intentional absence of any object value
// let x = null;
// console.log(typeof x); //object
// console.log(Array.isArray(x)); //false
// console.log(x); //null

// undefined type => A variable that has not been assigned a value is of type undefined 
// let x;
// console.log(typeof x);
// console.log(x); //undefined

//number type

// let x = 10;
// console.log(typeof x);
// console.log(x);


// BigInt => BigInt is a new data type intended for use when integer values are larger than the range supported by the Number data type.

// string type => words under quotation mark

// let x = "jamal";
// console.log(typeof x);
// console.log(x);

// symbole type

// not taught will cover later

// try yourself

const x = ["a", "b", "c", "d"];
const y = "why";
const z = 26;
const abc = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof abc);
console.log("**********check if a variable is an array or not;**************");
console.log(Array.isArray(x));
console.log(Array.isArray(abc));





// typeof
const uname = 56;
console.log(typeof uname);
const uname1 = "jamal";
console.log(typeof uname1);
const uname2 = [1,2,6,8,6,5,84,4545,];
console.log(typeof uname2);
console.log(Array.isArray(uname2));



