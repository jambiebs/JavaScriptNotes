// // array destructuring 
// // const myArray = ["value1", "value2", "value3","value4"];
// // let myvar1 = myArray[0];
// // let myvar2 = myArray[1];
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// // let [myvar1, myvar2, ...myNewArray] = myArray;
// // console.log("value of myvar1", myvar1);
// // console.log("value of myvar2", myvar2);
// // console.log(myNewArray);



// // custom code by --jamal


// // self homework


// // const myarray = ["value1", "value2", "value3", "value4", "value5"];
// // let var1 = myarray[0];
// // let var2 = myarray[1];
// // let[var1, , var3, ...mynewarray] = myarray;
// // let mynewarray = myarray.slice(0);
// // console.log("value of var1 is", var1);
// // console.log("value of var2 is", var2);
// // console.log("value of var3 is", var3);
// // console.log(mynewarray);




// // const webSite = ["facebook", "google", "youtube", "twitter", "instagram","amazon","flipkart"];
// // // let var1 = webSite[2];
// // // let var2 = webSite[1];
// // // console.log(var1);
// // // console.log(var2);

// // let[ , var1, var2, ...newarray] = webSite;
// // webSite.push("linkedin");
// // console.log(webSite);
// // console.log(var1);
// // console.log(var2);
// // console.log("***********new array starts from here**************");
// // console.log(newarray);





// const myArray = ["value1", "value2"];
// let x = myArray[0];
// let x2 = myArray[1];
// console.log(myArray);
// console.log(x);
// console.log(x2);
// let[y, z] = myArray;
// console.log(y);
// console.log(z);
// console.log(b);



// // what does array destructure mean?
// // array destructure mean that storing an array item/value to sperete variables.






let x = [4,2,88,6,8];
let y = [].concat(x,['555']); // this is compeletly different array from x.
y.shift();
console.log(y);
console.log(x);
let [b,...a] = x;
console.log(x);
console.log(a);
console.log(b); // output: 4;











