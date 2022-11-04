// // // function singHappyBirthday(){
// // //     console.log("happy birthday to you ......");
// // // }

// // // function sumThreeNumbers(number1, number2, number3){
// // //     return number1 + number2 + number3;
// // // }



// // // // isEven
// // // // input : 1 number 
// // // // output : true , false 

// // // // function isEven(number){
// // // //     return number % 2 === 0;
// // // // }

// // // // console.log(isEven(4));

// // // // function 
// // // // input : string 
// // // // output: firstCharacter 

// // // // function firstChar(anyString){
// // // //     return anyString[0];
// // // // }

// // // // console.log(firstChar("zbc"));

// // // // function 
// // // // input : array, target (number)
// // // // output: index of target if target present in array 

// // // function findTarget(array, target){
// // //     for(let i = 0; i<array.length; i++){
// // //         if(array[i]===target){
// // //             return i;
// // //         }
// // //     }
// // //     return -1;
// // // }
// // // const myArray = [1,3,8,90]
// // // const ans = findTarget(myArray, 4);
// // // console.log(ans);






// // // custom code by --jamal



// // function hbd(){
// //     console.log("happy birthday to you dear...!!!")
// // }

// // hbd();


// // function sofn(n1 = 0, n2 = 0, n3 = 0 ){
// //     return n1 + n2 + n3;
// // }
// // let i = 150;
// // let g = 150;
// // let k = 700;
// // console.log(sofn(g,i,k))

// // function eventorf(num){
// //     if (num % 2 === 0){
// //     return true;
// //     }
// //     return false;
// // }

// // let n = 945454544;
// // console.log(eventorf(n));

// // function findUser(array,target){
// //     for(i = 0; i<array.length; i++){
// //         if(array[i] === target){
// //             return i;
// //         }
// //     }
// //     return -1;
// // }


// // const user = ["jambiebs", "jadlsds", "jdkjdskjfd", "agdsads", "jfgasdgad", "jafsdafdsa"];
// // console.log(findUser(user, "jafsdafdsa"));





// // function printName(){
// //    console.log("md jamaluddin ansari"); 
// // }
// // printName();




// // function oddEven(x,y,z) {
// //     return x + y + z;
// // }

// // let number1 = 40;
// // let number2 = 30;
// // let number3 = 30;
// // let add = oddEven(number1, number2, number3);
// // console.log(add);

// // console.log("***************************************************************************************************")
// // creating a childhood play of guessing a thought number

// // function numberGuess(x, y){
// //     return (x + y / 2) - (y / 2); 
// // }
// // let think = 20;
// // let add = 50;
// // let result = numberGuess(think, add);
// // console.log(result);

// // creating a function to print pre-stored value

// // function StayByJustinBieber() {
// //     console.log("I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I get drunk, wake up, I'm wasted still I realize the time that I wasted here I feel like you can't feel the way I feel I'll be fucked up if you can't be right here Oh-whoa (oh-whoa, whoa) Oh-whoa (oh-whoa, whoa) Oh-whoa (oh-whoa, whoa) I'll be fucked up if you can't be right here I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, yeah When I'm away from you, I miss your touch (ooh-ooh) You're the reason I believe in love It's been difficult for me to trust (ooh-ooh)And I'm afraid that I'ma fuck it up Ain't no way that I can leave you stranded 'Cause you ain't never left me empty-handed And you know that I know that I can't live without youSo, baby, stayOh-whoa (oh-whoa, whoa) Oh-whoa (oh-whoa, whoa) Oh-whoa (oh-whoa, whoa) I'll be fucked up if you can't be right here I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, yeah I do the same thing, I told you that I never would I told you I changed, even when I knew I never could I know that I can't find nobody else as good as you I need you to stay, need you to stay, hey Whoa-oh I need you to stay, need you to stay, hey")
// // }
// // StayByJustinBieber();


// // division of two numbers

// // function divOfnum (x, y) {
// //     return x / y;
// // }
// // let x = 40;
// // let y = 3;
// // const result = divOfnum(x, y);
// // console.log(result);


// // addition of two numbers

// let result = (x, y) => {
//     return x + y;
// }
// let x = 64;
// let y = 35;
// console.log(result(x, y));

// // substraction of two numbers

// let minus = (a, b) => {
//     return a-b;
// }
// let a = 50;
// let b = 49;
// console.log(minus(a, b));

// // odd even of a number

// let oddEven = (z) => {
//     if(z%2===0){
//         return "even";
//     }
//     return "odd";
// }
// let z = 51;
// console.log(oddEven(z));

// // finding target

function findTgt(f, t){
    for(let i = 0; i<f.length; i++){
        if(f[i]===t){
            return i;
        }
    }
    return "not found";
}
let f = [1,2,4,5,9,7,45,34,65,15,36,33,34];  
let t = 34;
console.log(findTgt(f, t)); 
// completed till here 45th chapter to be started tommorrow 01/11/2022

