// // // rest parameters 

// // // function myFunc(a,b,...c){
// // //     console.log(`a is ${a}`);
// // //     console.log(`b is ${b}`);
// // //     console.log(`c is`, c);
// // // }

// // // myFunc(3,4,5,6,7,8,9);

// // // function addAll(...numbers){
// // //     let total = 0;
// // //     for(let number of numbers){
// // //         total = total + number;
// // //     }
// // //     return total;
// // // }

// // // const ans = addAll(4,5,4,2,10);
// // // console.log(ans);




// // // custom code by --jamal


// // // function addAll(...numbers){
// // //     let total = 0;
// // //     for(let number of numbers){
// // //         total = total + number;
// // //     }
// // //     return total;
// // // }

// // // const sum = addAll(5,5,5,5);
// // // console.log(sum);









// // // const addAll = (...numbers) => {
// // //     let total = 0;
// // //     for (let number of numbers) {
// // //         total = total + number;
// // //     }
// // //     return total;
// // // }
// // // let num1 = addAll(54654,465465,46546,8774,8,464,44,8,84,46464,5646,4646,4966,44,46,46,46,46,46,4,867,87,8,8,654,6,8,8,8,7,98,6);
// // // console.log(num1);



// // // practice


// // // create a function to add multiple numbers

// // function addAll(a,b,...c){
// //     total = 0;
// //     for(let value of [a,b,...c]){
// //         total = total + value;
// //     }
// //     return total;
// // }

// // let x = 10;
// // let y = 20;
// // let [...z] = [20,20,30,10];
// // let sum = addAll(x,y,...z);
// // console.log(sum);

// // create a function to add multiple numbers
// let sumOfNumbers = (a,b,...c) => {
//     total = 0;
//     for(let value of [a,b,...c]){
//         total = total + value;

//     }
//     return total;
// }
// let a = 50;
// let b = 100;
// let c = [50,100,200];
// console.log(sumOfNumbers(a,b,...c));

// // how above function worked;
// // for of is a loop 
// // first we decelared the value of total = 0;
// // see below table
// // total        total   +    value 
// // 0            0       +       50
// // 50           50      +       100
// // 150          150     +       50
// // 200          200     +       100
// // 300          300     +       200
// // 500          500     +       no more numbers available to add
// // so final result is 500;



// // "for in/of" in number 
// let jamal = [100,200,300,400];
// for(let number in jamal){
//     console.log(number); // return index of numbers
// }
// for(let number of jamal){
// console.log(number); // return value of array
// }

// // "for in/of" in string

// let jamal2 = ["ambitious", "qualified", "intelligent"];
// for(let value of jamal2){
//     console.log(value); // return value of array
// }
// for(let value in jamal2){
//     console.log(value);  // return index number
// }


// // add all numbers of array
// let x =[45,5,6,94,56,54,546,88,45,54654,85,46548,8,68,4,654,988,8];
// let sumAll = (...x) => {
//     result = 0;
//     for(let all of x){
//         result = result + all;
//     }
//     return result;
// }
// console.log(sumAll(...x));

// function sumAll(...x){
//     let total = 0;
//     for(let number of x){
//         total = total + number;
//     }
//     return total;
// }
// const add = sumAll(55,55,90,300);
// console.log(add);


// add all function

let array = [10,20,30,40,50,60,-10];

function sumAll(...array){
    let number = 0;
    for(let numbers of array){
        number = number+numbers;
    }
    return number;
}
const sum = sumAll(...array);
console.log(sum);