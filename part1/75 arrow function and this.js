// // arrow functions 

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }   
// }

// user1.about(user1);


// // try yourself


// const user2 = {
//     name: "jamal",
//     age: 27,
//     about: (user2) => {
//         console.log(`user name is ${user2.name} and age is ${user2.age}`); // this method dosen't work on arrow function inside object
//     }
// }
// user2.about();

// 6.75% Extra Offer!!!

let addMoney = 464948.54;

let obj = {
    balance(){
        console.log("Hurray!!!!")
        return `Hey we deposited bounus amount of '${addMoney*6.75/100} INR' on your deposit of '${addMoney} INR' Your final Deposited Amount is '${addMoney*106.75/100} INR'`
    }
}
console.log(obj.balance());















