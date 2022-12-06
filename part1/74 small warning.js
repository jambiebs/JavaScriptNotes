
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 

// const myFunc = user1.about.bind(user1);
// myFunc();
// const pdetail = user1.about(); // using this method will return user1 detail but together it will also return undefined
// console.log(pdetail);
// user1.about(); // this will return the correct output but you won't be able to store it in a variable; see above eg.

// use of bind method
const printDetail = user1.about.bind(user1);
printDetail();  // this is the correct method to call and store it into a variable
