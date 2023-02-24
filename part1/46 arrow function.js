// // // arrow functions
// // // const singHappyBirthday = function(){
// // //     console.log("happy birthday to you ......");
// // // }

// // const singHappyBirthday = () => {
// //     console.log("happy birthday to you ......");
// // }

// // singHappyBirthday();

// // const sumThreeNumbers = (number1, number2, number3) => {
// //     return number1 + number2 + number3;
// // }

// // const ans = sumThreeNumbers(2,3,4);
// // console.log(ans);

// // // const isEven = function(number){
// // //     return number % 2 === 0;
// // // }

// // const isEven = number => number % 2 === 0;


// // console.log(isEven(4));

// // const firstChar = anyString => anyString[0];

// // console.log(firstChar("harshit"));


// // const findTarget = (array, target) => {
// //     for(let i = 0; i<array.length; i++){
// //         if(array[i]===target){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }






// // custom code by --jamal



// const hbd =() => {
//     console.log("happy birthday to you dear...!!!")
// }

// hbd();


// const sofn = (n1 = 0, n2 = 0, n3 = 0 ) => {
//     return n1 + n2 + n3;
// }
// let i = 150;
// let g = 150;
// let k = 700;
// console.log(sofn(g,i,k));


// const eventorf = (num) => {
//     if (num % 2 === 0){
//     return true;
//     }
//     return false;
// }

// let n = 945454544;
// console.log(eventorf(n));

// const findUser = (array,target) => {
//     for(i = 0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }


// const user = ["jambiebs", "jadlsds", "jdkjdskjfd", "agdsads", "jfgasdgad", "jafsdafdsa"];
// console.log(findUser(user, "jafsdafdsa"));









// // find target using arrow function
let findTarget = (n, f) => {
    for(let i = 0; i < n.length; i++) {
        if (n[i] === f) {
            return `number ${n[i]} found on index number ${i}.`;
        }
    }
    return "not found";
}
let n = [4,6,4,86,48,68,12,45,68,48,955,6];
let f = 4;
console.log(findTarget(n, f));