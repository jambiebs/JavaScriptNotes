// // nested if else

// // winning number 19

// // 19 your guess is right
// // 17 too low
// // 20 too high

// // my custom code --jamal

// // let user = "jambiebs";
// // let password = 24246120;
// // let userGuess1 = prompt("Enter Username:");
// // let userGuess2 = +prompt("Enter your password:");

// // if(userGuess1 === user && userGuess2 === password){
// //     alert("Login success!!");
// // }else{
// //     if(userGuess1 !== user){
// //         alert("wrong userid!");
// //     }else{
// //         if(userGuess2 !== password)
// //         alert("wrong password!");
// //     }
// // }

// // let userId = "jambiebs";
// // let password = 24246120;
// // let userguess1 = prompt("enter your username");
// // let userguess2 = +prompt("enter your password");
// // if(userguess1 === userId && userguess2 === password){
// //     alert("login success!");
// // }
// // else{
// //     if(userguess1 !== userId){
// //         console.log("wrong UserId");
// //     }
// //     else{
// //         if(userguess2 !== password){
// //             console.log("wrong password!");
// //         }
// //     }
// // }

// let username = "jambiebs";
// let pass = 24246120;
// let userinput = "jambiebs@gmail.com"
// let passinput = 24246120;
// if(userinput === username && passinput === pass){
//     result = `login success`
// }else{
//     if(userinput !== username && passinput !== pass){
//         result = `wrong username and password`;
//     }else{
//         if(userinput !== username){
//             result = `wrong username`;
//         }else{
//             result = ` worng password`;
//         }
//     }
// }
// console.log(result);
// nested if else practice
// weather condition
// const temp = 41;
// if (temp <= 10) {
//     console.log("it is cold outside");
// } else {
//     if (temp > 10 && temp <= 20) {
//         console.log("little cold outside");
//     } else {
//         if (temp > 20 && temp <= 30) {
//             console.log("weather is pleasant outside");
//         } else {
//             if (temp > 30 && temp <= 40) {
//                 console.log("weather is hot outside");
//             } else {
//                 console.log("it is extremely hot outside");
//             };
//         }
//     }
// }

// let member = "OK";
// let cash;
// if(cash>=1000){
//     console.log(member + " is a VIP Member");
// }else{
//     if(cash<=1000){
//         console.log(member + " is a Regular Member");
//     }else{
//         console.log("you are a useless member");
//     }
// }
// console.log("Depositd Amount is = " + cash);

let member = "OK";
let cash;
if (cash >= 1000) {
  console.log(member + " is a VIP Member");
} else if (cash <= 1000) {
  console.log(member + " is a Regular Member");
} else {
  console.log("you are a useless member");
}
console.log("Depositd Amount is = " + cash);
