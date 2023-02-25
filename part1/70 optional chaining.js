// // optional chaining 
// // const user  = {
//     // firstName: "harshit",
//     // address: {houseNumber: '1234'}
// // }
// // let user;
// // console.log(user?.firstName);
// // console.log(user?.address?.houseNumber);





// // what is optional chaining?
// // suppose i have an object that contain nothing. it data is relied on user input so while coding you'll have to leave it blank but at the time of code execution it can show error. to get rid of this problem we use optional chaining. 
// // optional chaining is nothing but use of question mark(?). 
// // if we write ? in statement then it will be like "check if the given variable exist if exist then return the value if doesn't exit then return undefined".
// // To understand more about this topic, see the example below--

// const user = {
//     firstname: "jamal",
//     age: 27,
//     // address: {present: "Bishanpur, Po-Pachamba, Dist-Giridih, State-Jharkhand"}
// }
// console.log(user?.firstname);
// console.log(user?.age);
// console.log(user?.address?.present); //using ? return undefined and without ? it'll show error


const person = {
    // age:28
}
// person.firstname = "jamal";
// person.lastname = "Uddin";
console.log(person.firstname);
console.log(person.lastname);

// in Node.js this method is not neccessary becasue it give the same output as using with "?", but in browser (that I've not tested yet, compeletely relying on Harshit.) it may give you an error;
