// compilation 
// code execution

// why compilation 


// How javascript code executes 


// what is global exection context ? 
// what is local execution context ? 
// closures
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);


// detailed Descriptions; 
// there are two phase of compilation 
// 1. compile
// 2. code execute
// why to compile? why can't we execute line by line.
// ther are theree phase of compilation 
// 1. tokenizing/lexing
// 2. parsing
// 3. code excution 
// in first phase compiler break the code into chunks; that is called tokenizing; it create 'abstract syntax tree(AST)'
// in parsing phase javascript decide the variable scope and syntex format is correct or not;   
// official ecma script says that it is not necessary to compile the code but there should be 1. early error checking 2. determining appropriate scope for variable; 
// 