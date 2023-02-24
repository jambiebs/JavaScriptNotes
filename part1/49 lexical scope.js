// // // // lexical scope 
// lexical scope mean a variable should be either inside global scope or inside function/block/local scope and it is required that that variable should be mentioned before the function calls; see example below:-
const myVar = "vlaue0"; // this variable is accessible because it exist in the global scope and before myApp();
function myApp() { // #1 execution
  // const myVar = "value1"; // this variable is accesible because 1.) it is inside function scope, 2.) it is mentioned before function called;
  function myFunc() { // #2 execution
    // const myVar = "value2"; // this variable is accesible because 1.) it is inside function scope, 2.) it is mentioned before function called;
    const myFunc2 = () => { // #3 execution
      // const myVar = "value3"; // this variable is accesible because 1.) it is inside function scope, 2.) it is mentioned before function called;
      console.log("inside myFunc", myVar);
      // const myVar = "value4"; // this variable is not accesible because it is mentioned in the same scope where we are trying to print it to the console but it is mentioned after console.log; accoring to the priority this function will be called in this sequence 1.myApp(), 2.myFunc(), 3.myFunc2; as we see here that while the execution myFunc2 will be executed in last and linewise console.log will be executed before myVar and it will throw a refrence error;
    }
    // const myVar = "value5"; // this variable is accesible because 1.) it is inside function scope, 2.) it is mentioned before function called;
    myFunc2();
    // const myVar = "value6"; // this variable is not accessible because it it mentioned after function called;
  }
  // const myVar = "value7";  // this variable is mentioned after myFunc2() and accoring to "vlaue6" statement it should not be accessible though it is accessible even it is mentioned after myFunc2(), because it is mentioned #2 execution block so before we execute console.log in #3 execution javascript has already recieved myVar from #2 execution block. thus it is accessible;
  myFunc();
  // const myVar = "value8" // this variable is not accessible, why? to understand this you have to understand chronology of execution; as we call myApp() it will execute global scope first and store all information that is mentioned before myApp() call command, then it will go to myApp function and here javaScript see that there is a function named myfunc it will ignore it because it is not a call statement, then it will skip the whole block; after myFunc block ends javaScript sees that there is "myFunc()" which is a call statement so it will start calling myFunc() and all the functions inside myFunc(); as the ouput statement of myVar is mentioned inside child function of myFunc(), it will try to print it before myVar is accessed; thus it throws an error; 
  // note: javascript executes its code line by line; 
}
// const myVar = "value9"; // this variable is accessible because it is mentioned in global scope and before myApp();
myApp();
// const myVar = "value10"; // this variable is not accessible because it is mentioned after myApp();


function md(){
  function jamal(){
    function ansari(){
    }
    ansari();
    const mjua = "md jamaluddin ansari";
    console.log("This is me", mjua);
  }
  jamal();
}
md();







// // // custom code by --jamal



// // // self homework


// // // const myvar1 = "this variable is outside and above of myFunction";
// // function myFunction(){
// //     // const myvar1 = "this variable is inside myFunction";
// //     const msg = function(){
// //         console.log("msg from msg function")

// //     }
// //     console.log(myvar1);
// //     msg();
// // }
// // const myvar1 = "this variable is outside and below my Function.";
// // myFunction();




// const outer = "outer";
// const outer2 = "outer2";

// function outerFunc() {
//   const inner = "inner";

//   function innerFunc() {
//     console.log(outer); 
//     console.log(inner); 
//     console.log(outer2);
//   }

//   innerFunc();
// }

// outerFunc();
