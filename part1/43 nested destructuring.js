// // // nested destructuring 
// // destructuring an object that is inside an array is called nested destructuring
// // const users = [
// //     {userId: 1,firstName: 'harshit', gender: 'male'},
// //     {userId: 2,firstName: 'mohit', gender: 'male'},
// //     {userId: 3,firstName: 'nitish', gender: 'female'},
// // ]

// // const [{firstName: lodalahsun,gender}, , {gender: user3gender}] = users;
// // console.log(lodalahsun);
// // // console.log(userId);
// // // console.log(user3gender);
// // console.log(gender);









// // try yourself



// // create a function to find specific user in the object
// function findTarget(x, y){
//     for(let i )
// }

const user = [
    { userId: "jambiebs", password: 24246120 },
    { userId: "jadlsds", password: 24246123 },
    { userId: "jdkjdskjfd", password: 24246125 },
    { userId: "agdsads", password: 24246125 },
    { userId: "jfgasdgad", password: 24246125 },
    { userId: "jafsdafdsa", password: 24246129 }
];
function findTarget(user, y) {
    for (let i in user) {
        if (y === user[i].userId) {
            console.log(user[i]);
            return; // it is necesary to use return otherwise the loop will continue and result will be not found even if it exit in the array;
        }
    }
    console.log("not found");
}
let y = "jambiebs";
findTarget(user, y);

// chatGpt
// const user = [
//     { userId: "jambiebs", password: 24246120 },
//     { userId: "jadlsds", password: 24246123 },
//     { userId: "jdkjdskjfd", password: 24246125 },
//     { userId: "agdsads", password: 24246125 },
//     { userId: "jfgasdgad", password: 24246125 },
//     { userId: "jafsdafdsa", password: 24246129 }
// ];

// function findTarget(user, y) {
//     for (let i = 0; i < user.length; i++) {
//         if (y === user[i].userId) {
//             console.log(user[i].userId);
//             return; // why this is necessary?
//         }
//     }
//     console.log("not found");
// }

// let y = "jambiebs";
// findTarget(user, y);


// const [{userId:user1,password},{userId:user2,},{...rest}] = user; // I have use ':' to give different name to the key, it may be useful to understand that which user's data you want to fetch; one curly braces refers to one object inside the array; suppose there is more than one key value pair than you can destructure it by using comma; it will set different value to different variable but you have to name the variable same as mentioned inside the object and result will be shown based on index; and by using spreade operator you don't have to define different variable for individual value, it will add rest of the value to one variable. 
// // console.log(user1);
// // console.log(password);
// // console.log(rest);

// const [usr1, usr2, usr3, usr4, usr5, usr6] = user;
// console.log(usr1); // output: {userId: 'jambiebs', password: 24246120}
