// // // // array push pop 

// // // // array shift unshift 

// // push: add an item in the last index of an array
// // pop: delete the last item of an array
// // shift: delete the first item of an array
// // unshift: add an item in first index of an array

// // // let fruits = ["apple", "mango", "grapes"];
// // // console.log(fruits);
// // // // push 
// // // let pushedFruits = fruits.push("banana");
// // // console.log(fruits);
// // // console.log(`pushed fruit is ${pushedFruits}`);

// // // // pop 
// // // let poppedFruit = fruits.pop();
// // // console.log(fruits);
// // // console.log("popped fruits is", poppedFruit);

// // // // unshift 
// // // // fruits.unshift("banana");
// // // // fruits.unshift("myfruit");
// // // // console.log(fruits);

// // // // shift 
// // // // let removedFruit = fruits.shift();
// // // // console.log(fruits);
// // // // console.log("removed fruits is ", removedFruit);


// // // // custom code by --jamal


// // // // self homework

// // // // make an array
// // // // use push method to add an item 
// // // // use pop method to remove an item
// // // // print popped item
// // // // use shift method to add an item
// // // // use unshift method to remove an item
// // // // print unshifted item



// // let tool = ["hammer", "saw", "nail"];
// // // console.log(tool);
// // // tool.push("cutting blade");
// // // console.log(tool);   
// // // tool.pop();
// // // console.log(tool);
// // let unshifted = tool.unshift("dash");
// // console.log(tool);
// // console.log(unshifted);
// // tool.shift();
// // let shiftedTool = tool.shift();
// // console.log(shiftedTool);
// // let poppedTool = tool.pop();
// // console.log(poppedTool);




// // // // make an array
// // // // use push method to add an item 
// // // // use pop method to remove an item
// // // // print popped item
// // // // use shift method to remove an item
// // // // use unshift method to add an item
// // // // print unshifted item


// // // const items = ["item1", "item2", "item3"];
// // // items.push("item4");
// // // console.log(items);
// // // const poppedItems = items.pop();
// // // console.log(items);
// // // console.log(poppedItems);
// // // const shiftedItems = items.shift();
// // // console.log(shiftedItems);
// // // console.log(items);
// // // const unshiftedItems = items.unshift("you");
// // // console.log(items);
// // // console.log(unshiftedItems);

// const i = ["name", "uname", "username"];
// // const pushed = i.push("jamal");
// // console.log(i);
// // const popped = i.pop();
// // console.log(i);
// // console.log(popped);
// // const shiftedItems = i.shift("abc");
// // console.log(i);
// // console.log(shiftedItems);
// const unshiftedItems = i.unshift("you");
// console.log(i);


const array1 = ["a", "b", "c", "d"];
console.log(array1);
array1.push("e");
console.log(array1);
array1.unshift("-1");
console.log(array1);


const array2 = ["a", "b", "c", "d"];
console.log(array2);
const poppeditem = array2.pop();
console.log(`"${poppeditem}" this item was removed from end of array`);
console.log(array2);
const shifteditem = array2.shift();
console.log(`"${shifteditem}" this item was removed from start of array`);
console.log(array2);