// callback functions 

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }


// myFunc(myFunc2);






























// custom code by --jamal

// calling a function by using another function is called callback function

function myFunc1(name){
    console.log("msg from myFunc1");
    console.log(`your name is ${name}`);
}
function myFunc2(callback){
    console.log("msg form myFunc2");
    callback("md jamaluddin ansari");   // callback() is a function anything you pass inside the paranthesis will be passed 
}                                       // to myFunc1(***here***);
myFunc2(myFunc1);



// another example of callback function

function greeting(name) {
    alert(`Hello, ${name}`);   // this will alert a greeting with your name but your name is not in record so go to next fn
  }
  
  function processUserInput(callback) {                 //here we create a function to callback the main greeting function
    const name = prompt("Please enter your name.");     // we created a variable prompt to take input from user     
    callback(name);                                     // after getting input from user we stored it to var name and passed
  }                                                     // it to main greeting function using callback
  
  processUserInput(greeting);
  





//   try yourself

function greeting(username){
    alert(`Hello ${username}`);
}
function userinput(callback){
    const username = prompt("please enter your name");
    callback(username);
}
userinput(greeting);