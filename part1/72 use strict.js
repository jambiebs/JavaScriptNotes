// console.log(window);
// "use strict";
function myFunc(){

    console.log(this);
}
myFunc(); 

// console.log(this);

// what is the problem here? when we console.log(this) inside myFunc it should return a function because this is mentioned inside myfunc() but it is returning window object; so to overcome this issue use "use strict" statement; but why the output of console.log(this) is not a function;
// will understand later in more detail; dated: 04/01/2023 16:38 pm IST

