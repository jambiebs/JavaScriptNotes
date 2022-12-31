// // // trim() 
// // // toUpperCase()
// // // toLowerCase()
// // // slice()

// // let firstName = "harshit";

// // console.log(firstName.length);
// // firstName = firstName.trim(); // "harshit"
// // console.log(firstName)
// // console.log(firstName.length);
// // // firstName = firstName.toUpperCase();
// // // firstName = firstName.toLowerCase();
// // // console.log(firstName);

// // // start index 
// // // end index

// // let newString = firstName.slice(1); // hars
// // console.log(newString);




// // custom code by --jamal




// // try yourself



// // use trim function "trim removes spaces from bothside"
// // use slice function
// // use toUpperCase function
// // use toLowerCase function


// // let myName = "   jamal uddin ";
// // console.log(myName);
// // let newString = myName.trim();
// // console.log(newString);
// // console.log(newString.toUpperCase())



// // try yourself
// //trim()
// //toUpperCase()
// //toLowerCase()
// //slice()


// const userName = "   jambiebs  ";
// const slice = "jambiebs";
// console.log(userName.toUpperCase());
// console.log(userName.toLowerCase());
// console.log(userName.trim()); // trim function removes the spaces of start and end but not from between
// console.log(slice.slice(3)); //using minus will keep the last character of specified number, for example if -4 then keep last four digit, if -2 then keep last two digit; But if you use number without minus then it wil delete the digits from start if 3 then delete first three digits and it also count spaces as character;


// const narration = "Mera Naam Binod Hai Aur Mera Naam Viral Hai";
// console.log(narration.trim());
// console.log(narration.slice(-5));
// console.log(narration.toUpperCase());
// console.log(narration.toLowerCase());







// trim()------> trim will cut the spaces befor or after the string;
console.log("*******************this is the example of trim*****************************")
const uname = "      jamal uddin ";
const trimmed = uname.trim();
console.log(trimmed);
console.log(uname);


// slice([start],[how_many_to_keep]) -------> slice will delete the characters of string 
console.log("***********************this is the example of slice***************************")
const uname1 = "jamal uddin"
const sliced = uname1.slice(0,2); // 0 is start point and 2 is two character will be kept and rest will be deleted;
console.log(sliced);
console.log(uname1);

// uppercase()
console.log("***************this is the example of uppercase**********************")
const uname2 = "jamaluddin";
const upperCase = uname2.toUpperCase();
console.log(uname2);
console.log(upperCase);

// lowercase()
console.log("**************this is the example of lowercase*****************")
const uname3 = "JAMALUDDIN";
const lowercase = uname3.toLowerCase();
console.log(uname3);
console.log(lowercase);