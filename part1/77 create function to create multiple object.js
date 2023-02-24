
// // // function (that function create object)
// // // 2.) add key value pair 
// // // 3.) object ko return krega 
// // function createUser(firstName, lastName, email, age, address){
// //     const user = {};
// //     user.firstName = firstName;
// //     user.lastName = lastName;
// //     user.email = email;
// //     user.age = age;
// //     user.address = address;
// //     user.about = function(){
// //         return `${this.firstName} is ${this.age} years old.`;
// //     };
// //     user.is18 =  function(){
// //         return this.age >= 18;
// //     }
// //     return user;
// // }

// // const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 17, "my address");
// // console.log(user1);
// // const is18 = user1.is18();
// // const about = user1.about();
// // console.log(about);

















// // try yourself
// // const printDetail = function(firstName, email, mobile, age){
// // const user1 = {};
// // user1.firstName = firstName;
// // user1.email = email;
// // user1.mobile = mobile;
// // user1.age = age;
// // user1.about = function () {
// //     return (`user's name is ${this.firstName} email is ${this.email} and mobile number is ${this.mobile}`);
// // }
// // user1.is18 = function () {
// //     return this.age >= 18;
// // }
// // return user1;
// // }

// // const user = printDetail("jamal","jambiebs@gamil.com","9931937556",27);
// // console.log(user);
// // const about = user.about();
// // console.log(about);
// // const is18 = user.is18();
// // console.log(is18);

// const x = function(a,b,c,d){
//     const y = {};
//     y.a = a;
//     y.b = b;
//     y.c = c;
//     y.d = d;
//     y.about = function (){
//         return (`user age is ${this.d}`);
//     };
//     y.is18 = function () {
//             return this.d>=18;
//     }
//     return y;
// }

// const z = x("jamal", "kamal", "damal", 19);
// console.log(z);
// const about = z.about();
// console.log(about);
// const is18 = z.is18();
// console.log(is18);





function multiple(firstName, lastName, age, height){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.height = height;
    user.about = function (){
        return (`${this.firstName}, ${this.lastName}, ${this.age}, ${this.height}`);
    }
    user.is18 = function(){
        return this.age >= 18;
    }
    user.tall = function(){
        return this.height >= 5;
    }
    return user;
}
const user1 = multiple("jamal", "uddin", 19, 6);
const user2 = multiple("ajay", "devegan", 54, 6);
const user3 = multiple("salman", "khan", 56, 5.8);
console.log(user3.about());
console.log(user3.is18());
console.log(user3.tall());
// all is working fine, but there is a problem in this; lets move to next chapter to find out;