// // // find method 
// find method will return the first result matching the criteria it will not work as google search 

// // // const myArray = ["Hello", "catt", "dog", "lion"];

// // // function isLength3(string){
// // //     return string.length === 3;
// // // }

// // // const ans = myArray.find((string)=>string.length===3);
// // // console.log(ans);

// // const users = [
// //     {userId : 1, userName: "harshit"},
// //     {userId : 2, userName: "harsh"},
// //     {userId : 3, userName: "nitish"},
// //     {userId : 4, userName: "mohit"},
// //     {userId : 5, userName: "aaditya"},
// // ];

// // const myUser = users.find((user)=>user.userId===3);
// // console.log(myUser);














// // // exercise 

// // const newArray3 = ["abdul", "azim", "anurup", "garima", "vishwas"];
// // const find = newArray3.find((char)=>char.length === 4);
// // console.log(find);

// const date = new Date("2023-11-25");
// console.log(date);




const numbers = [48,49,58,56,54,158];
const find = numbers.find((x)=>{
    if(x<60){
        return x;
    }
});
console.log(find);



const words = ["samim", "jamal", "binod"];
const zind = words.find((x)=>{
    if(x === "jamal"){
        return `${x}`;
    }
});
console.log(zind);