// // // objects inside array 
// // // very useful in real world applications

// // const users = [
// //     {userId: 1,firstName: 'harshit', gender: 'male'},
// //     {userId: 2,firstName: 'mohit', gender: 'male'},
// //     {userId: 3,firstName: 'nitish', gender: 'male'},
// // ]
// // for(let user of users){
// //     console.log(user.userName);
// // }




// // custom code by --jamal




// // const user = [
// //     {userId : "jambiebs", password : 24246120},
// //     {userId : "jadlsds", password : 24246123},
// //     {userId : "jdkjdskjfd", password : 24246125},
// //     {userId : "agdsads", password : 24246125},
// //     {userId : "jfgasdgad", password : 24246125},
// //     {userId : "jafsdafdsa", password : 24246129}
// // ]
// // for(let users of user){
// //     // console.log(users.userId);   
// //     console.log(`${users.userId} : ${users.password}`);
// // }





// // try yourself



// const user = [
//         {userId : "jambiebs", password : 24246120},
//         {userId : "jadlsds", password : 24246123},
//         {userId : "jdkjdskjfd", password : 24246125},
//         {userId : "agdsads", password : 24246125},
//         {userId : "jfgasdgad", password : 24246125},
//         {userId : "jafsdafdsa", password : 24246129}
//     ]

//     for(let users of user){
//         // console.log(users);
//         console.log(users.userId, ":", users.password);
//     }

const user = [
    {userId : "jambiebs", password : 24246120},
    {userId : "jadlsds", password : 24246123},
    {userId : "jdkjdskjfd", password : 24246125},
    {userId : "agdsads", password : 24246125},
    {userId : "jfgasdgad", password : 24246125},
    {userId : "jafsdafdsa", password : 24246129}
]
for(let users in user){
    console.log(user[users]);
}
for(let sudos of user){
    console.log(sudos);
}
