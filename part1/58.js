// filter method 

// const numbers = [1,3,2,6,4,8];



// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);

// practice

const numbers = [1,3,2,6,4,8,45,5465,4,5,465,878,654,5,4,46,465,464,8,6,4,5,9,8,7,5,49,7,94,,4,8,46,,,464,6,49,];


function evenNum(num){
    return num % 2 !== 0;
}
const num = numbers.filter(evenNum);
console.log(num);