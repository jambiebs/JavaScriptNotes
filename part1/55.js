// // function returning function 

// function myFunc(){                  
//     function hello(){
//         return "hello world"
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());
// // console.log(myFunc());
// // console.log(hello());


// // explained
// // so we stored myFunc() into a variable ans, so when we try to print ans it will call myFunc() and myFunc is returning hello see line no 7, so when myFunc() returned hello then it will go to funcion hello() and hello will be stored in ans but hello() is an fuction stored in ans that's whay ans become function to so in console.log we have written ans() as a function. 

// // you can try to print ans instead of ans(), you will see that it is giving out put as a functio. to print a function we have to use parenthesis like ans(). 

// // we cannot call a function directly if it is inside a function, first you'll have to store it into any variable

// // this lesson was completed on 11 october 2022






























// // custom code by --jamal




// // function myFunc(){
// //     function hello(){
// //         console.log("hello world");
// //     }
// //     return hello;
// // }

// // const frf = myFunc();
// // frf();




// practice


// create a function inside a function and store it to a variable


function hw(){
    function hello(){
        console.log("hello world")
    }
    return hello;
}

let msg = hw();
msg();