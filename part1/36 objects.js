// // objects reference type  
// // arrays are good but not sufficient 
// // for real world data 
// // objects store key value pairs 
// // objects don't have index

// // how to create objects 

// // const person = {name:"Harshit",age:22};
// // const person = {
// //     name: "harshit",
// //     age: 22,
// //     hobbies: ["guitar", "sleeping", "listening music"]
// // }
// // console.log(person);

// // how to access data from objects 
// // console.log(person["name"]);
// // console.log(person["age"]);
// // console.log(person.hobbies);

// // how to add key value pair to objects
// // person["person"] = "male";
// // console.log(person);



// // custom code by --jamal



// // self homework



// // objects in javascript


// // creat a detailed object
// // access object's attributes with key using dot and bracket notation
// // describe the differences



// // const key = "password";
// // const user = {
// //     name : "MD JAMALUDDIN ANSARI",
// //     age : 27,
// //     address : "BISHANPUR, PO-PACHAMBA, DIST-GIRIDIH, STATE-JHARKHAND PIN CODE- 815316",
// //     "mobile number" : 9931937556,
// //     hobbies : ["playing chess", "surfing internet", "listening music"] 
// // }
// // console.log(user);
// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.address);
// // console.log(user["mobile number"]);
// // console.log(user.hobbies[2].toUpperCase());
// // user.email = "jambiebs@gamil.com";
// // console.log(user);
// // user[key] = 24246120;
// // console.log(user);







// // try yourself



// // create an array
// // print to console
// // access using key properties
// // add an array to object properties
// // add a new key value pair
// // access using dot notation and bracket notation
// // add a properties to object (properties should be of two or three words)
// // define the difference between dot notaion and bracket notation
// // add a new key value pair using bracket notation
// // 
// const key = "email";
// const website = {
//     youtube: "a video sharing platform",
//     google: "world's most popular search engine",
//     instagram: "child company of meta, a short video sharing platform",
//     facebook: "world's most popular social media network",
//     // "best ecommerce website's name": "amazon, flipkart, myntra, snapdeal, ajio"

// }
// // console.log(website);
// // console.log(website.instagram);
// // website.flipkart = "an ecommerce website";
// // console.log(website);
// // console.log(website.flipkart);
// // console.log(website);
// // console.log(website["best ecommerce website's name"]);
// // website["best search engine"] = "google, yahoo, duckduckgo, bing";
// // console.log(website["best search engine"]);
// // console.log(website);
// // website[key] = "jambiebs@gmail.com";
// // console.log(website);



// // error encountered

// // white adding value pair to the object i noticed that if i add and "string key to the object" and later add any value pair to the object outside the block wether using .notation or []notation the added value doesn't print to console and also not showing any error and if i try to access that value individually it show the output.







// // creat a detailed object
// // access object's attributes with key using dot and bracket notation
// // describe the differences




let object = {
    userName: "Md JamalUddin Ansari",
    age: 27,
    "email Address": "jambiebs@gmail.com"
}
console.log(object.userName);
console.log(object.age);
console.log(object["email Address"]);
