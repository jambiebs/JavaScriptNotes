// param destructuring 

// object 
// react 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);































// custom code by --jamal






// const user = {
//     name : "Md JamalUddin Ansari",
//     gender : "Male",
//     age : 27
// }


// function printDetail(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// printDetail(user);


// const user = {
//     name : "md jamaluddin ansari",
//     gender : "male",
//     age : 27,
//     email : "jambiebs@gmail.com"
// }
// function printDetail({name, gender, age, email}){
//     console.log(`user's name is ${name}`);
//     console.log(`user's gender is ${gender}`);
//     console.log(`user's age is ${age}`);
//     console.log(`user's email is ${email}`);

// }
// printDetail(user);




// try yourself


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

function addAll(a,b,...rest){
    total = 0;
    for(let para of [a,b, ...rest]){    // different technique to run for of loop in variables/function parameters
        total = total + para;
    }
    return total;
}

// let [x, y, ...z] = [10,20,40,]; // this is the way to declare multiple variable and their value

let sum = addAll(10,20,30,40,50,60,70);
console.log(sum);



// print all the properties of following object seperately
const user = {
        name : "md jamaluddin ansari",
        gender : "male",
        age : 27,
        email : "jambiebs@gmail.com"
    }
    const user2 = {
        name: "md irshad hussain",
        gender: "male",
        age: 18,
        email: "abcd@example.com"
    }
    // for(let users in user){
        // var individuals = (users, ":", user[users]);   // all these codes are experiment
    // }

    function printDetail({name,gender,age,email}){   // this is called parameter destructuring // basically it is defining
        console.log(`name of the user is ${name}`);                                             // diffent prop indivdually
        console.log(`gender of the user is ${gender}`);
        console.log(`age of the user is ${age}`);
        console.log("\"email\" of the user is",email);
    }
    printDetail(user);
    printDetail(user2);