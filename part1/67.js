// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);




// practice

// set is itrable
// set cannot contain two item of similar value in the same address
// two array of same value can exit but same value in same array cannot exit twice
// order of the set is not guaranteed

const jamal = new Set();   // S of the Set should be in capital letter
jamal.add(5);
jamal.add(6);
jamal.add("hello");
jamal.add(786);
console.log(jamal);
// has method to find a value available or not available in set array (used with if function)
if(jamal.has({hello:"world"})){  // here you can see that it cannot store a key value pair
    console.log("available");
}else{
    console.log("Not Available");
}

// finding the length of an array inside set
// to find the length of the set array you have to run for...of loop but first declare let length with any variable name and set the value to 0. and in for...of loop add length++ so that on every loop the length increases by 1 till the final loop and thus we get the length of array.

// const randomNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// const jamal1 = new Set(randomNum);
// jamal1.add(20);
// let length = 0;
// for(let element of jamal1){   
//     length++;
//     console.log(element);
// }
// console.log(length);