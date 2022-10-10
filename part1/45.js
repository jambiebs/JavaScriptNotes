// // function expression 
// // function singHappyBirthday(){
// //     console.log("happy birthday to you ......");
// // }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// // singHappyBirthday();

// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// // console.log(ans);


// // function isEven(number){
// //     return number % 2 === 0;
// // }
// const isEven = function(number){
//     return number % 2 === 0;
// }
// // console.log(isEven(2));

// const firstChar = function(anyString){
//     return anyString[0];
// }

// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }









// custom code by --jamal



const hbd = function(){
    console.log("happy birthday to you dear...!!!")
}

hbd();


const sofn = function(n1 = 0, n2 = 0, n3 = 0 ){
    return n1 + n2 + n3;
}
let i = 150;
let g = 150;
let k = 700;
console.log(sofn(g,i,k));


const eventorf = function(num){
    if (num % 2 === 0){
    return true;
    }
    return false;
}

let n = 945454544;
console.log(eventorf(n));

const findUser = function(array,target){
    for(i = 0; i<array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}


const user = ["jambiebs", "jadlsds", "jdkjdskjfd", "agdsads", "jfgasdgad", "jafsdafdsa"];
console.log(findUser(user, "jafsdafdsa"));