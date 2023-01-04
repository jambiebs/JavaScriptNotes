// // clone using Object.assign 

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



const obj1 = {
    id1: 1,
    id2: 2
}

const obj2 = {
    id3: 3,
    id4: 4
}
const newObj = Object.assign({id5: 5},obj1, obj2);  
console.log(newObj); // this is giving me unexpected output of {id:4}; why?

