
// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// // don't do this mistake 

// // const myFunc = user1.about.bind(user1);
// // myFunc();
// // const pdetail = user1.about(); // using this method will return user1 detail but together it will also return undefined
// // console.log(pdetail);
// // user1.about(); // this will return the correct output but you won't be able to store it in a variable; see above eg.

// // use of bind method
// const printDetail = user1.about.bind(user1);
// printDetail();  // this is the correct method to call and store it into a variable



const userC = {
    userName: "jambiebs",
    password: "GoToHell12O'Clock",
    about: function(){
        // console.log(this);
        console.log(`Username is "${this.userName}" and password is "${this.password}"`);
        
    }
}

// const detail = userC.about;
// detail();
// why the above line is not working? lets find out by below example;
// const detail = function(){
    // console.log(`Username is "${this.userName}" and password is "${this.password}"`);
// }
// detail();
// output of both 'detail()' mentioned above is same; so you can understand that both arguments are same atleast javascritp is understanding it same. it is not binding 'userC' with 'detail', so we have to bind it properly otherwise it will return window/global object; lets see how to bind it;

const detail = userC.about.bind(userC);
detail();   