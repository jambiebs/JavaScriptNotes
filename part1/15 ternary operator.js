// ternary operator 

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// ternary operator / conditional operator 

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);



// custom code by --jamal



// try yourself


// condition => if age is less then 10 then suggest drinking milk else suggest coffee.


// let age = 12;
// let suggest = age<10 ? "drink milk" : "drink coffee";
// console.log(suggest);

// let age = 10;
// if(age<10){
//     console.log("drink milk");
// }
// else{
//     console.log("drink coffee");
// }

// ternery operator is vary handy when there is only two condition
// make a program where a number will be defined as odd or even
const num = 65;
const oddEven = num%2===0 ? "Even" : "Odd";
console.log(oddEven);


const income = 8054545;
if(income<=500000){
 result = `you can apply for ration card, your annual income is less than 5 lakh`;   
}else if(income<800000){
    result = `you cannot apply for ration card, your annual income is more than 5 lakh, but you can apply for yellow card`;
}else{
    result = `you are not eligible to apply for any cards, please pay your income tax to earliest to avoid IT raid.`
}
console.log(result);