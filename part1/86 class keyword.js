// // 2015 / es6 
// // class keyword 
// // class are fake

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old.`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "la la la la ";
//     }

// }


// const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// // console.log(Object.getPrototypeOf(user1));

// practice
class CreateUser {
    constructor(firstName, lastName, age, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
    }
    about() {
        return `user's firstname is ${this.firstName}, last name is ${this.lastName} and age is ${this.age}`;
    }
    tall() {
        return this.height >= 5;
    }
}

const user1 = new CreateUser("Jam", "Al", 27, 5.8);
const user2 = new CreateUser("Salman", "khan", 56, 5.6);
const user3 = new CreateUser("Rajpal", "Yadav", 45, 4.6);
console.log(user2.about());
console.log(user2.height);
console.log(user2.tall());





