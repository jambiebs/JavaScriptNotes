// // // forEach method ( it will take number in first param, and index in second praram, and perform any function you define accordingly)
// // // important array methods 


// // //  const numbers = [4,2,5,8];

// // // function myFunc(number, index){
// // //     console.log(`index is ${index} number is ${number}`);
// // // }

// // // numbers.forEach(function(number,index){
// // //     console.log(`index is ${index} number is ${number}`);
// // // });

// // // numbers.forEach(function(number, index){
// // //     console.log(number*3, index);
// // // })

// // // const users = [
// // //     {firstName: "harshit", age: 23},
// // //     {firstName: "mohit", age: 21},
// // //     {firstName: "nitish", age: 22},
// // //     {firstName: "garima", age: 20},
// // // ]

// // // users.forEach(function(user){
// // //     console.log(user.firstName);
// // // });

// // // users.forEach((user, index)=>{
// // //     console.log(user.firstName, index);
// // // })

// // // for(let user of users){
// // //     console.log(user.firstName);
// // // }































// // // custom code by --jamal



// // // practice

// // // foreachloop

// const numbers = [8, 10, 56, 78, 16, 56, 489];

// function number(x, y) {
//     console.log(`${x}[${y}]`);
// }

// let x = numbers.forEach(number);
// let y = numbers.map(number);  // both function same only difference is that map create a new array and forEach doesn't
// console.log(Array.isArray(x));       //false
// console.log(Array.isArray(y));      // true

// // // traditional methods
// // // const numbers = [8, 10, 56, 78, 16, 56, 489];

// // // function number(x, y) {
// // //     console.log(`${x}[${y}]`);
// // // }
// // // for (let i = 0; i<numbers.length; i++){
// // //     console.log("number is", numbers[i], "and index is", i);
// // // }


// // // forEach on objects

// // // const users = [
// // //     { name: "jamal", id: 450 },
// // //     { name: "ajay", id: 480 },
// // //     { name: "vijay", id: 798 },
// // //     { name: "manoj", id: 752 }
// // // ]

// // // function nameId(x, y){
// // //     console.log("name is",x.name,"& Id is", x.id);
// // // }
// // // users.forEach(nameId);

// // // traditional methods

// // const users = [
// //         { name: "jamal", id: 450 },
// //         { name: "ajay", id: 480 },
// //         { name: "vijay", id: 798 },
// //         { name: "manoj", id: 752 }
// //     ]

// //     for(let i = 0; i<users.length; i++){
// //         console.log("name:",users[i].name, ",", "index:", i);
// //     }












// create an array and print value with index.
// first method 
let arrray = ["a","b","c","d"];


function valueI (value, index){
    console.log(arrray[0],0);
    console.log(arrray[1],1);
    console.log(arrray[2],2);
    console.log(arrray[3],3);

}
valueI();
console.log("****************************************")
// second method
let array1 = ["a","b","c","d"];

function valueII (value, index) {
    for(let i = 0; i<array1.length; i++){
        console.log(array1[i],i);
    }
}
valueII();
console.log("*******************************************")
// third method
let array2 = ["a","b","c","d"];
array2.forEach((value,index)=>{console.log(value,index)})



