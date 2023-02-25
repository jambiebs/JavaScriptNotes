// // clone using Object.assign 
// Object.assign is used to merge multiple objects into one Object;

// // memory  

// const obj = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = {'key69': "value69",...obj};
// const obj2 = Object.assign({'key69': "value69"}, obj);
// // obj.key3 = "value3";
// // console.log(obj);
// console.log(obj2);



// const obj1 = {
//     id1: 1,
//     id2: 2
// }

// const obj2 = {
//     id3: 3,
//     id4: 4
// }
// const newObj = Object.assign({id5: 5},obj1, obj2);  
// console.log(newObj); // this is giving me unexpected output of {id:4}; why?



// const obj1 = {
//     pid1 : "monitor"
// };
// const obj2 = {
//     pid2 : "led"
// };

// const newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);

// can we perform same with array? lets see:-
let array1 = [12,23,34,45,56];
let array2 = [67,78,89,910,1011];
let newArray = Object.assign([], array1, array2);
console.log(newArray); // output is equivalant to array2;
// now we know we cannot use this mehtod to clone array instead use spread opretor or concat to achieve;
let newArray1 = [].concat(...array1, array2);
console.log(newArray1);
// OR
let newArray2 = [...array1, ...array2];
console.log(newArray2);



// nested object
let nested2 = [
    {userNames: "af", password:1},
    {userNames: "ag", password:2},
    {userNames: "ah", password:3},
    {userNames: "ai", password:4},
];
let nested1 = [
    {userNames: "ab", password:5},
    {userNames: "ac", password:6},
    {userNames: "ad", password:7},
    {userNames: "ae", password:8},
];
let twoNested = [...nested1, ...nested2];
let userInput = "aj";
let check = twoNested.some((user)=>user.userNames === userInput);
if(check === true){
    console.log("UserId is already in use by another user! Try different one.");
}else{
    console.log("This userId is Available!");
};



// console.log(check); // this is not returning boolean
// console.log(nested1);
// for(let user of nested1){
//     let userlist = [user.userNames];
//     let check = userlist.find((user)=>{
//         if(user === "ac"){
//             return true;
//         }return false;
//     });
//     console.log(check);
    // if(user[userNames].find((v)=>{
    //     if(v==="ac"){
    //         return true;
    //     }return false;
    // })==="true"){
    //     console.log("Not Available");
    // }else{
    //     console.log("Available");
    // }
// }