// map method 
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