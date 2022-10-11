// // nested destructuring 
// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'female'},
// ]

// const [{firstName: lodalahsun,gender}, , {gender: user3gender}] = users;
// console.log(lodalahsun);
// // console.log(userId);
// // console.log(user3gender);
// console.log(gender);









// try yourself





const user = [
        {userId : "jambiebs", password : 24246120},
        {userId : "jadlsds", password : 24246123},
        {userId : "jdkjdskjfd", password : 24246125},
        {userId : "agdsads", password : 24246125},
        {userId : "jfgasdgad", password : 24246125},
        {userId : "jafsdafdsa", password : 24246129}
    ]



const[user1, ...rest] = user;
console.log(first);
console.log(rest);


// *********note*********
// not satisfied with this lession's learning

