
// // switch statement 


// // let day = 7; 


// // if(day === 0){
// //     console.log("Sunday");
// // }else if(day ===1){
// //     console.log("Monday");
// // }else if(day ===2){
// //     console.log("Tuesday");
// // }else if(day ===3){
// //     console.log("Wednesday");
// // }else if(day ===4){
// //     console.log("Thrusday");
// // }else if(day ===5){
// //     console.log("Friday");
// // }else if(day ===6){
// //     console.log("Saturday");
// // }else{
// //     console.log("Invalid Day");
// // }


// // let day = 9;

// // switch (day) {
// //     case 0:
// //         console.log("Sunday");
// //         break;
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thrusday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     default:
// //         console.log("Invalid Day");
// // }










// // let rollNo = +prompt("enter your roll no");

// // switch (rollNo) {
// //     case 340:
// //         console.log({
// //             name: "md jamaluddin ansari",
// //             age: 27
// //         });
// //         break;
// //     case 320:
// //         console.log({
// //             name: "unknown",
// //             age: 22
// //         });
// //         break;
// //         default:
// //             console.log("Roll no not found");
// // }


// const empno = 566;
// switch (empno) {
//     case 0:
//         result = `owner`;
//         break;
//     case 1:
//         result = `vivek`;
//         break;
//     case 2:
//         result = `ajay`;
//         break;
//     case 3:
//         result = `jamal`;
//         break;
//     case 4:
//         result = `new employee`;
//         break;
//     default:
//         result = `not found`;
// }
// console.log(result);



// // switch case statement

const income = 10000;
switch (income) {
    case income <= 5000:
        result = `very poor`;
        break;
    case income <= 15000:
        result = `poor`;
        break;
    case income <= 25000:
        result = `lower middle class`;
        break;
    case income <= 60000:
        result = `middle class`;
        break;
    case income <= 100000:
        result = `upper middle class`;
        break;
    case income > 100000:
        result = `Rich`;
        break;
    default:
        console.log("not found");
}
console.log(result);