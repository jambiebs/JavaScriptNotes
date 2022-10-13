// // default parameters 

// // function addTwo(a,b){
// //     if(typeof b ==="undefined"){
// //         b = 0;
// //     }
// //     return a+b;
// // }

// // function addTwo(a,b){
// //     if(typeof b === undefined);
// //     b = 0;
// //     return a+b;
// // }

// // const ans = addTwo(4);
// // console.log(ans);





// // custom code by --jamal



// // function addThree(a, b, c){
// //     if (typeof b === undefined);
// //     b = 0;
// //     if (typeof c === undefined);
// //     c = 0;
// //     return a + b + c;
// // }

// // const sum = addThree(8);
// // console.log(sum);


// // function sofn(a = 0, b = 0, c = 0){
// //     return a + b + c;
// // }
// // const sum = sofn(8,4,8);
// // console.log(sum);

















// // try yourself


// function addTwo(x, y) {
//     if (typeof y === "undefined") {     // putting quation mark in undefined is must otherwise output will NaN
//         y = 0;
//     }
//     return x + y;
// }
// let mum = 5;
// let mum1;
// let z = addTwo(mum, mum1);              // remember this method very important already forgot two times
// console.log(z);
















// // practice


// // create a function to add two numbers

function addTwo(a,b){
    if(b === "undefined"){
        b = 0;
    }
    return a + b;
}

let x = 10;
let y = 90;
let sum = addTwo(x,y);
console.log(sum);