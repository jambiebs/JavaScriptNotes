// // splice method 
// // start(index) , delete , insert 

// // const myArray = ['item1', 'item2', 'item3'];

// // delete
// // const deletedItem = myArray.splice(1, 2);
// // console.log("delted item", deletedItem);
// // insert 
// // myArray.splice(1, 0,'inserted item');

// // // insert and delete 
// // const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// // console.log("delted item", deletedItem);
// // console.log(myArray);


// // const myArray1 = ["item1", "item2", "item3"];
// // const jamal = myArray1.splice(1,1,"jamal"); // splice is used to add or delete the items from array, it works indexwise 
// // console.log(jamal);  // this will give the output of deleted/added items
// // console.log(myArray1); // this is your main array that has changed 




// // practice
// // splice method changes the main array

// // const itemList1 = ["a", "b", "c", "d"];
// const remove = itemList1.splice(2,1); // here first index is from where you want to start, and second index is how many item you want to delete
// console.log(remove);
// const add = itemList1.splice(2,1, "c", "d");
// console.log(add);
// console.log(itemList1);


// splice method 
const numbering = ["a", "b", "c", "d"];
// const modified = numbering.splice(0,4,1,2,3,"this is not okay");
// console.log(numbering);
let deletedItems = numbering.splice(0,1,1,2,3,"this is not okay");
deletedItems.push("e");
console.log(deletedItems);
console.log(numbering);


