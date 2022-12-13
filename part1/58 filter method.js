// // filter method 
// // it returns one out of the two results => 1.true values according to the applied logic 2.false values according to the applied logic
// // returning one result dosen't mean that it will only return only one element it will return all the true or false result matching with the logic. see examples below:-

// // const numbers = [1,3,2,6,4,8];



// // const evenNumbers = numbers.filter((number)=>{
// //     return number % 2 === 0;
// // });
// // console.log(evenNumbers);

// // practice

// const numbers = [1,3,2,6,4,8,45,5465,4,5,465,878,654,5,4,46,465,464,8,6,4,5,9,8,7,5,49,7,94,,4,8,46,,,464,6,49,];


// function evenNum(num){
//     return num % 2 !== 0;
// }
// const num = numbers.filter(evenNum);
// // console.log(num);
// // practice

// function fltr(myNum1){
//     return myNum1>50;
// }

// const myNum = [40,99,49,562,87,69,38];
// const myNum1 = myNum.filter(fltr);
// console.log(myNum1);















const numbers = [1,3,2,6,4,8,45,5465,4,5,465,878,654,5,4,46,465,464,8,6,4,5,9,8,7,5,49,7,94,4,8,46,464,6,49,];

const fltr = numbers.filter((x)=>{
    if(x%2===0){
        return x;
    }
});
console.log(fltr);