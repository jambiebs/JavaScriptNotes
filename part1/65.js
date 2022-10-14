// splice method 
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// // insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);


const myArray1 = ["item1", "item2", "item3"];
const jamal = myArray1.splice(1,1,"jamal");
console.log(jamal);  // this will give the output of deleted/added items
console.log(myArray1); // this is your main array that has changed 