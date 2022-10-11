// // functions inside function 
// function app(){
//     const myFunc = () =>{
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




// custom code by --jamal

// function multi() {
//     const hello = function () {
//         console.log("hello there!");
//     }

//     const sofn = function (n1, n2) {
//         return n1 + n2;
//     }
//     const mul = function (n1, n2) {
//         return n1 * n2;
//     }
//     const endMsg = () => console.log("the end of project!");


//     hello();
//     console.log(sofn(40, 60));
//     console.log(mul(40, 5));
//     endMsg();
// }
// multi();























function sum(x){
    function(x, y){
        return x + y;
    }
}

let num = 5;
let num1 = 10;
let add = num, num2;
console.log(sum(add));