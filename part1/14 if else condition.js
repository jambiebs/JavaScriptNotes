// if else condition 

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }






// try yourself
// there is two movies 1. prates of the carribean(for adult) 2. taare zaamin par(for kid)


// let age = 12;
// if(age>=18){
//     notify = "user can play pirates of the carribean"
// }else{
//     notify = "user can play taare zaamin par"
// }

// console.log(notify);

// telling odd and even number


// let number = 100;
// if(number%2===0){
//     console.log("sam number");
// }
// else{
//     console.log("visham number");
// }





// custom code by --jamal

// let due = 28600;
// let payment = 4786;
// // let balance = payment-due
// // let outstanding = due-payment
// let check = function status(){
//     if(due === payment){
//     result = "awsome! there is no due in your account";
// }else if(payment > due){
//     result = `The balance of your account is: ${payment-due}.00 Rs on ${new Date()}`;
// }else{
//     result = `Your Due Amount is: ${due-payment}.00 Rs on ${new Date()}`;
// }
// return result;
// }
// console.log(check());



let due = 28600;
let payment = 4786;
// let balance = payment-due
// let outstanding = due-payment
if(due === payment){
    result = "awsome! there is no due in your account";
}else if(payment > due){
    result = `The balance of your account is: ${payment-due}.00 Rs on ${new Date()}`;
}else{
    result = `Your Due Amount is: ${due-payment}.00 Rs on ${new Date()}`;
}
console.log(result);



















let baki = 4000; 
let jama = 6789; 
if(baki===jama){
    result = `apke khate me koi bhi bakay rashi nahi hai`;
}else if(baki>jama){
    result = `aapka bakaya rashi hai ${baki-jama} Rs`;
}else{
    result = `aapke khate me uplabdh rashi hai ${jama-baki} Rs`;
}
console.log(result);

















// if else
let child = 25;
let adult = 49;
if(adult>=child*2){
    console.log(`there is ${child*2} couples with kid`);
}else{
    console.log("it is not clear that how many couples has kid because number of kids are more than couples");
}