// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }

// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);





// practice
const itemz = ["item1", "item2", "item3"];

for(let item of itemz){
    console.log(item);
}

const alpha = "abcdefghijklmnopqrstuvwxyz";
for(let char of alpha){
    console.log(char);
}

console.log("****************************************************************************")


// for of loops in strings
const myName = "Md Jamal Uddin ansari";
for(let char of myName){
    console.log(char);
}
// for of loops in array
const MyArray = new Array(10).fill(88);
for(let value of MyArray){
    console.log(value);
}