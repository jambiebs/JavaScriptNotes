// lexical environment, scope chain
const lastName = "Vashistha";
const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}
// const ivory = "color";
// console.log(ivory);
printName();

// harshit
// vasishth