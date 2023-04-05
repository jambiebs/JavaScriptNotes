// console.log(window);
// "use strict";
function myFunc(){

    console.log(this);
}
myFunc(); 

// console.log(this);

// what is the problem here? when we console.log(this) inside myFunc it should return a function because this is mentioned inside myfunc() but it is returning window object; so to overcome this issue use "use strict" statement; but why the output of console.log(this) is not a function;
// will understand later in more detail; dated: 04/01/2023 16:38 pm IST
// above explaination is wrong dated: 27/02/2023

// "use strict" is a directive that can be used at the beginning of a JavaScript file or a function. It enables strict mode, which is a set of rules that JavaScript code must follow.

// When you use "use strict", the JavaScript interpreter enforces stricter rules on the code, which can help prevent errors and make the code more secure. Some of the benefits of using strict mode include:

//1. Variables must be declared before they can be used.
//2. Function parameters must have unique names.
//3. The "this" keyword behaves differently in strict mode.
//4. Octal syntax (e.g. "0123") is not allowed.
//5. Assigning values to read-only properties or variables will throw an error.
//6. The "eval" function cannot create new variables in the scope where it is called.
//7. In short, "use strict" is a good practice to follow in your JavaScript code as it helps prevent errors, makes the code more secure, and enforces best practices.


