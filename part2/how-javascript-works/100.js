// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// function myFunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myFunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myFunction(3);
// const ans2 = cube(3);
// console.log(ans2);


// function func(power){
//     function func2(number){
//         return number ** power;
//     }
//     return func2;
// }

// let cube = func(3);
// let ans = cube(5)
// console.log(ans);

// short syntax

let power = power => number => number ** power;

let number = power(2);
let ans = number(12);
console.log(ans);












