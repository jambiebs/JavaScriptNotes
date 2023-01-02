// // // functions inside function 
// function app(){
//     const myFunc = () => {
//         console.log("hello from myFunc")
//     }

//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();




// // custom code by --jamal

// // function multi() {
// //     const hello = function () {
// //         console.log("hello there!");
// //     }

// //     const sofn = function (n1, n2) {
// //         return n1 + n2;
// //     }
// //     const mul = function (n1, n2) {
// //         return n1 * n2;
// //     }
// //     const endMsg = () => console.log("the end of project!");


// //     hello();
// //     console.log(sofn(40, 60));
// //     console.log(mul(40, 5));
// //     endMsg();
// // }
// // multi();










// let x = (hello) => {
//     return 'hello world!'
// }
// let addTwo = (a, b) => {
//     return a + b;
// }


// let a = 10;
// let b = 50;
// const multifn = x();
// const multifn1 = addTwo(a,b)
// console.log(`msg from hello is "${multifn}" and sum of number is "${multifn1}"`);











// // function sum(){
// //     function sum1(x, y){
// //         return x + y;
// //     }
// //     console.log("msg from main function");
// //     console.log(sum1(num, num1));
// // }

// // let num = 5;
// // let num1 = 10;
// // let add = (num, num1)
// // sum(num);






// // not satisfied with this topic's learning need to do more research
// // comment: suppose there is 10 function you want to declared and you want to call all the function together but you have to call them one by one; so we create a main function and put all the 10 function inside the main function, this way when we call the main function all the function inside it is called together.
// // see example below:-

function main(){
    const hello = () => {
        console.log("hellow world!");
    }
    const add = (x, y) => {
        console.log(`sum of ${x} and ${y} is ${x+y}`);
        }
    const mult = (a,b) =>{
        console.log(`multiply of ${a} and ${b} is ${a*b}`);
    }
    hello();
    add(20,30);
    mult(12,30);
}
main(); // here I'm calling the main function;

