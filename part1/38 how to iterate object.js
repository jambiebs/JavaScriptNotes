// // // how to iterate object 
// // const person = {
// //     name: "harshit",
// //     age: 22,
// //     "person hobbies": ["guitar", "sleeping", "listening music"]
// // }


// // // for in loop 
// // // Object.keys 

// // for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     // console.log(key," : " ,person[key]);
// // }

// // // console.log(typeof (Object.keys(person)));
// // // const val = Array.isArray((Object.keys(person)));
// // // console.log(val);

// // // for(let key of Object.keys(person)){
// // //     console.log(person[key]);
// // // }



// // // custom code by --jamal




// // // self homework




// // // create an array
// // // 





// // // const animal = {
// // //     color : "white",
// // //     nature : "fierce", 
// // //     petname : "tiger",
// // //     "active time" : "night",
// // //     "age in days" : 406,
// // //     "health condition" : "mild digesion problem"
    
// // // }

// // // for(let attr in animal){
// // // console.log(attr);
// // // console.log(animal[attr]);
// // // console.log(`${attr} : ${animal[attr]}`);
// // // console.log(attr, ":", animal[attr])




// // // }

// // // try yourselft
// // const person2 = {
// //     pName: "jaamal",
// //     age: 27,
// //     gender: "male"
// // }
// // const person3 = {...person, ...person2}; // spread operator to merge two objects 

// // for(let key in person3){
// //     console.log(`${key} : ${person3[key]}`);
// // }

// // // for(let value of Object.keys(person3)){
// // // console.log(`${(value)} : ${(person3[value])}`)
// // // }




// const person = {
//     personName: "jamal",
//     age: 27,
//     color: "black",
//     inteligence: "very high",
//     "financial status": "poor"
// }
// const objKey = Object.keys(person);
// console.log(objKey);
// // for(let key in person){
// //     console.log(`${key} : ${person[key]}`);
// // }





// const person = {
//     uname: "ashok",
//     age: 28,
//     nature: "calm",
//     ethnicity: "homo"
// }
// for(let key in person){
    // console.log(`${key} : ${person[key]}`);
// }
// for (let [key,val] of Object.entries(person)){
//     console.log(`${key}:${val}`);
// }



// const person = {
//     uname: "ashok",
//     age: 28,
//     nature: "calm",
//     ethnicity: "homo"
// }
// for(let detail in person){
//     console.log(`${detail} : ${person[detail]}`);
// }


let array234 = [1,2,6,45,8,6];
for(let numbers of array234){
    console.log(numbers);
}












