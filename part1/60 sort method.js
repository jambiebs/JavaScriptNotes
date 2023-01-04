// // // sort method 
// // // ASCII TABLE 
// // //char : ascii value


// // // '0' : 48
// // // '1' : 49
// // // '2' : 50
// // // '3' : 51
// // // '4' : 52
// // // '5' : 53
// // // '6' : 54
// // // '7' : 55
// // // '8' : 56
// // // '9' : 57


// // // ':' : 58
// // // ';' : 59
// // // '<' : 60
// // // '=' : 61
// // // '>' : 62
// // // '?' : 63
// // // '@' : 64


// // // 'A' : 65
// // // 'B' : 66
// // // 'C' : 67
// // // 'D' : 68
// // // 'E' : 69
// // // 'F' : 70
// // // 'G' : 71
// // // 'H' : 72
// // // 'I' : 73
// // // 'J' : 74
// // // 'K' : 75
// // // 'L' : 76
// // // 'M' : 77
// // // 'N' : 78
// // // 'O' : 79
// // // 'P' : 80
// // // 'Q' : 81
// // // 'R' : 82
// // // 'S' : 83
// // // 'T' : 84
// // // 'U' : 85
// // // 'V' : 86
// // // 'W' : 87
// // // 'X' : 88
// // // 'Y' : 89
// // // 'Z' : 90



// // // '[' : 91
// // // '\' : 92
// // // ']' : 93
// // // '^' : 94
// // // '_' : 95
// // // '`' : 96



// // // 'a' : 97
// // // 'b' : 98
// // // 'c' : 99
// // // 'd' : 100
// // // 'e' : 101
// // // 'f' : 102
// // // 'g' : 103
// // // 'h' : 104
// // // 'i' : 105
// // // 'j' : 106
// // // 'k' : 107
// // // 'l' : 108
// // // 'm' : 109
// // // 'n' : 110
// // // 'o' : 111
// // // 'p' : 112
// // // 'q' : 113
// // // 'r' : 114
// // // 's' : 115
// // // 't' : 116
// // // 'u' : 117
// // // 'v' : 118
// // // 'w' : 119
// // // 'x' : 120
// // // 'y' : 121
// // // 'z' : 122
// // // '{' : 123
// // // '|' : 124
// // // '}' : 125


// // // sort  

// // // 5,9,1200, 400, 3000
// // // 5, 9, 400, 1200, 3000 (expected)

// // // ["5", "9", "1210", "410", "3000"] 
// // // [53, 57, 49, 52, 51]

// // // const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// // // userNames.sort();
// // // console.log(userNames);

// // // const numbers = [5,9,1200, 410, 3000];
// // // numbers.sort((a,b)=>{
// // //     return b-a;
// // // });
// // // numbers.sort((a,b)=>a-b);
// // // console.log(numbers);

// // // 1200,410 
// // // a-b ---> 790
// // // a-b ---> postive (greater than 0) ---> b, a
// // // 410 , 1200

// // // a-b ---> negative ----> a,b
// // // 5, 9 ---> -4 
// // // price lowToHigh HighToLow 
// // const products = [
// //     { productId: 1, produceName: "p1", price: 300 },
// //     { productId: 2, produceName: "p2", price: 3000 },
// //     { productId: 3, produceName: "p3", price: 200 },
// //     { productId: 4, produceName: "p4", price: 8000 },
// //     { productId: 5, produceName: "p5", price: 500 },
// // ]

// // // lowToHigh
// // const lowToHigh = products.slice(0).sort((a, b) => {
// //     return a.price - b.price
// // });

// // const highToLow = products.slice(0).sort((a, b) => {
// //     return b.price - a.price;
// // });



// // const users = [
// //     { firstName: "harshit", age: 23 },
// //     { firstName: "mohit", age: 21 },
// //     { firstName: "nitish", age: 22 },
// //     { firstName: "garima", age: 20 },
// // ]


// // users.sort((a, b) => {
// //     if (a.firstName > b.firstName) {
// //         return 1;
// //     } else {
// //         return -1;
// //     }
// // });

// // console.log(users);




// // // practice

// const number = [4, 45, 26, 777, 264, 561, 55, 22, 512];

// const sort = number.sort((a, b) => a - b);
// console.log(number);

// const word = ["hello", "jamal", "abcd", "aacb", "sonu"];
// console.log(word.sort());

// const objectt = [
//     {Id: 3, firstname: "jamal" },
//     {Id: 2, firstname: "samal" },
//     {Id: 7, firstname: "zamal" },
//     {Id: 45, firstname: "damal" },
//     {Id: 6, firstname: "xamal" }
// ]
// function obj(a, b) {
//     if (a.firstname > b.firstname) {
//         return 1;
//     }
//     return -1;
// }
// console.log(objectt.sort(obj));
// const fnd = objectt.find((objectt) => objectt.Id === 7);
// console.log(fnd);

// // practice


// const num1 = [5,6,456,5,45,8,88,88,8,6,58,46,8]
// let sortedA = num1.sort((a,b)=>{
//     return a-b;
// })
// console.log(sortedA);

// let sortedD = num1.sort((a,b)=>{
//     return b-a;
// })
// console.log("***************************");
// console.log(sortedD);



// let newArray = ["ankit", "abhijit", "ajit", "arshit", "abhiprit", "arijit"];
// let sortedW = newArray.sort();
// console.log(sortedW);



// sort method
// // sorting numbers;
// const numbers = [58,45,645,45,4598,454,845,498465,46,46,45,5,8,8995];
// const sorted = numbers.sort((a,b)=>{
//     return b-a;
// });
// console.log(sorted);
// // sorting alphabets;

// const alphabet = ["b","c","d","o","f","g","i","l","z","p","h","s"];
// const sortedAlpha = alphabet.sort();
// console.log(sortedAlpha);


// sort method

const numbers = [58, 45, 645, 45, 4598, 454, 845, 498465, 46, 46, 45, 5, 8, 8995];
const lowToHigh = numbers.sort((a, b) => a - b);
// const highToLow = numbers.sort((a, b) => b - a);
console.log(lowToHigh);
// console.log(highToLow);














