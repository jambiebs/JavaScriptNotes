// // how to iterate object 
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }


// // for in loop 
// // Object.keys 

// // for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     // console.log(key," : " ,person[key]);
// // }

// // console.log(typeof (Object.keys(person)));
// // const val = Array.isArray((Object.keys(person)));
// // console.log(val);

// // for(let key of Object.keys(person)){
// //     console.log(person[key]);
// // }



// // custom code by --jamal




// // self homework




// // create an array
// // 





// // const animal = {
// //     color : "white",
// //     nature : "fierce", 
// //     petname : "tiger",
// //     "active time" : "night",
// //     "age in days" : 406,
// //     "health condition" : "mild digetion problem"
    
// // }

// // for(let attr in animal){
// // console.log(attr);
// // console.log(animal[attr]);
// // console.log(`${attr} : ${animal[attr]}`);
// // console.log(attr, ":", animal[attr])




// // }

// // try yourselft
// const person2 = {
//     pName: "jaamal",
//     age: 27,
//     gender: "male"
// }
// const person3 = {...person, ...person2}; // spread operator to merge two objects 

// for(let key in person3){
//     console.log(`${key} : ${person3[key]}`);
// }

// // for(let value of Object.keys(person3)){
// // console.log(`${(value)} : ${(person3[value])}`)
// // }