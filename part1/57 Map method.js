// map method 
// map method is similar to forEach method there are only two differences:-
// 1. map method creates a new array while forEach method doesn't create a new array
// 2. map method has chaining method ability.

// map method vs forEach method

function test(number) {
    console.log(`${number * 2}`);
}
const numbers = [8, 12, 26, 8, 5, 9];
let x = numbers.forEach(test);       //both gives same output
let y = numbers.map(test);           //both gives same output
console.log(Array.isArray(x));       //false
console.log("*****************************************")
console.log(Array.isArray(y));       //true


//chaining ability

/*let a = numbers.forEach(test).sort(function(a,b){
     return a-b;
 });*/  //this line giving an error because forEach has not the ability to chain other method
console.log("*****************sorted*************************")
let b = numbers.map(test).sort(function(a,b){
    return a-b;
});

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]
// map method using function
function username(x){
    return x.firstName;
}
console.log(users.map(username));
const user1 = users.map(username);
console.log(user1);

// traditional forloop method
for(let i = 0; i<users.length; i++){
    console.log(users[i].firstName);
}
// map method using arrow function
const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);


// practice

// const sqNumber = [5,4,8,9,7,3,6];
// // const sqNumber = 7;

// function sq(x){
//     return x = x*x;
// }
// for (let i = 0; i<sqNumber.length; i++){
//     console.log(sq(sqNumber[i]));    
// }
// console.log(sqNumber.map(sq));
// let square = sqNumber.map(sq);
// console.log(square);