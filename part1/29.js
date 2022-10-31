// how to clone array 

// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1)
// console.log(array2)



// custom code by --jamal


// self homework
// make an array1
// make an array2 and clone array1 to it use four different method(copy,slice,concat,spread)
// make anothor array with any name and clone it to array2 by using all three method except copy
// check if two array are same or not by using === operator
// add item5 to array2 by using all three method except copy


// const array1 = ["item1", "item2"];
// const array2 = ["item3","item4"];
// const cloneArray = array1.slice(0); //cloning of array using slice method
// console.log(cloneArray);
// const cloneArray2 = [].concat(array1); //cloning of array using concat method
// console.log(cloneArray2);
// const cloneArray3 = [...array1]; //clonig of array using spread method
// console.log(cloneArray3); 

// cloning of more than one array

// const array1 = ["item1", "item2"];
// const array2 = ["item3", "item4"];
// const array3 = ["item5", "item6"];
// const cloneArray = array1.slice(0).concat(array2, array3, ["item7"]); //cloning of array using slice method
// console.log(cloneArray);
// const cloneArray2 = [].concat(array1, array2, array3, ["item7"]); //cloning of array using concat method
// console.log(cloneArray2);
// const cloneArray3 = [...array1, ...array2, ...array3, "item7"]; //clonig of array using spread method
// console.log(cloneArray3);



// self homework
// make an array1
// make an array2 and clone array1 to it use four different method(copy,slice,concat,spread)
// make anothor array with any name and clone it to array2 by using all three method except copy
// check if two array are same or not by using === operator
// add item5 to array2 by using all three method except copy



let array1 = ["a", "b","c", "d", "e"];
let array2 = array1;
array1.push("f");
console.log(array1);
console.log(array2);
console.log(array1 === array2);
let array3 = array1.slice(0);
array3.push("f");
array1.push("g");
console.log(array3);
console.log(array1);
let array4 = [].concat(array1);
console.log(array4);
array1.push("h");
console.log(array1);
console.log(array4);
let array5 = [...array1,"I", ...array2, ...array3, ...array4];
console.log(array5);

