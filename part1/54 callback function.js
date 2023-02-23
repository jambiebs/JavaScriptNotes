// callback functions 

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");            // here callback("harshit") === myfunc2(name);
// }


// myFunc(myFunc2);







// practice

// create a callback function


// function display(){
//     console.log(`welcome ${yourname}`);
// }


// function input(callback){
//     yourname = "Jam Al!";
//     callback(yourname);
// }
// input(display);        // without this line the above function will not work as callback function so calling a function is important method to remember!                  

// custom code by --jamal

// calling a function by using another function is called callback function

// function myFunc1(name){
//     console.log("msg from myFunc1");
//     console.log(`your name is ${name}`);
// }
// function myFunc2(callback){
//     console.log("msg form myFunc2");
//     callback("md jamaluddin ansari");   // callback() is a function anything you pass inside the paranthesis will be passed 
// }                                       // to myFunc1(***here***);
// myFunc2(myFunc1);



// // another example of callback function

// function greeting(name) {
//     alert(`Hello, ${name}`);   // this will alert a greeting with your name but your name is not in record so go to next fn
//   }
  
//   function processUserInput(callback) {                 //here we create a function to callback the main greeting function
//     const name = prompt("Please enter your name.");     // we created a variable prompt to take input from user     
//     callback(name); // after getting input from user we stored it to var name and passed it to main greeting function using callback
//   } 
  
//   processUserInput(greeting);
  
// //   try yourself

// function greeting(username){
//     alert(`Hello ${username}`);
// }
// function userinput(callback){
//     const username = prompt("please enter your name");
//     callback(username);
// }
// userinput(greeting);



// create a callback function

// let function1 = (callback) => {
//     console.log("this output is from function1");
//     let sm = "485454824887545452484234654";
//     callback(sm);
//     // console.log(callback(sm));
//     console.log(callback);
// }
// let function2 = (message) => {
//     console.log("this output is from function2");
//     console.log(`the secret message is ${message}, decode it`)
//     // return `the secret message is ${message}, decode it`
    
// }

// function1(function2);

// function oribori(x){
//     console.log("from oribori", x);
// }
// function jonparson(y){
//     let uname = "Md Jamal Uddin Ansari";
//     y(uname);
// }
// jonparson(oribori);

// callback function

function x(name){
    console.log("inside x");
    console.log(`your name is ${name}`);
}

function y(callback){
    console.log("hello i am function y");
    x("jamal");
    callback("jamal"); 
}
// explaination
// on y function above y has a parameter "callback", then we call y(x),thus callback becomes x;
// so according to this "x === callback";
// x(name) === callback("jamal");
y(x);
















