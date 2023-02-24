// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1.about());
// console.log(user3.about());

// practice
const extramethods = {
    about: function () {
        return (`${this.firstName}, ${this.lastName}, ${this.age}, ${this.height}`);
    },
    is18: function () {
        return this.age >= 18;
    },
    tall: function () {
        return this.height >= 5;
    }

}


function multiple(firstName, lastName, age, height) {
    const user = Object.create(extramethods); // this line is creating a link between user and extramethods variable;
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.height = height;
    return user;
}
const user1 = multiple("jamal", "uddin", 19, 6);
const user2 = multiple("ajay", "devegan", 54, 6);
const user3 = multiple("salman", "khan", 56, 5.8);
console.log(user3.about());
console.log(user3.is18());
console.log(user3.tall());



















