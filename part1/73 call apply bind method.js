// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,   
// }

// // apply
// // about.apply(user1, ["guitar", "bach"]);
// // const func = about.bind(user2, "guitar", "bach");
// // func();

// // understanding call.apply.bind

function hello(){
    console.log("hello");
}

hello();
hello.call(); // the output of both line is same; so now we know that there are two method to call a function; based on this knowledge now we are going to learn bind and apply method;

const user1 = {
    uname: "jam_al",
    age: 28,
    about: function(){
        console.log(this.uname, this.age);
        // console.log(this); // here the value of this is user1
    }
}
user1.about(); // everything is working fine till here and we are getting the expected output; 
// now we are going to create a new object of user2

const user2 = {
    uname: "ajay",
    age: 30
}
// user2.about(); // this line is throwing an error
// as it is clear that about is specified in user1 not in user2 that's why the above line is throwing an error so now our motive is to borrow 'about' from user1 and use it in user2; lets see how it works;
user1.about.call(user2); // this is giving me the expected output
// now we know the importance of call() method; lets explore further;
// suppose we have two users userA and userB;
function userDetails(){
    console.log(`${this.uname} and my age is ${this.age}`);
}
const userA = {
    uname: "I m userA",
    age: 34
}
const userB = {
    uname: "I am userB",
    age: 54
}
userDetails.call(userA); // expected output
userDetails.call(userB); // expected output
// now you might be thinking that why can't we dirctly call using paranthesis instead of using 'call()' method; lets see if it works;
userDetails(userA); // output is 'undefined and my age is undefined';
// why the above code didn't work; to understand this we have to know what is the value of this inside function; for example
function test(){
    console.log(this);
}
test(); // output window object/global
// however lets see a seperate example to understand the value of this;
function seperate(x){
    console.log(x.userName)
}
const newUser = {
    userName: "ImNewUser"
}
seperate(newUser); // expected output because we have used 'x' parameter in function    
// so when we use a function with blank parameter then to utilize 'this' keyword using 'call()' method is necessary;
// now let's see how apply method works?
// apply
function testData(x, y){
    console.log(`Result is ${this.test1} or ${this.test2}; ${x} and ${y}`);
}

const applyTest1 = {
    test1: "data1",
    test2: "data2"
}
const applyTest2 = {
    test1: "data3",
    test2: "data4"
}

testData.apply(applyTest1,["apply1","test2"]); // using squarebracket is necessary
testData.apply(applyTest2,["apply3","test4"]); // using squarebracket is necessary
// apply is same as 'call()' method only extra functionality is that you have option to add more data in your result

// bind
const bind1 = testData.bind(applyTest1,"bind1","test2"); // do not use squarebracket 
const bind2 = testData.bind(applyTest2,"bind3","test4"); // do not use squarebracket
bind1();
bind2();
// bind has same function like apply difference is this that it returns a function instead of calling so we store it in a variable and can call it whenever required;