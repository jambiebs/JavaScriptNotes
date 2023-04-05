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
// const extramethods = {
//     about: function () {
//         return (`${this.firstName}, ${this.lastName}, ${this.age}, ${this.height}`);
//     },
//     is18: function () {
//         return this.age >= 18;
//     },
//     tall: function () {
//         return this.height >= 5;
//     }

// }


// function multiple(firstName, lastName, age, height) {
//     const user = Object.create(extramethods); // this line is creating a link between user and extramethods variable;
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.height = height;
//     return user;
// }
// const user1 = multiple("jamal", "uddin", 19, 6);
// const user2 = multiple("ajay", "devegan", 54, 6);
// const user3 = multiple("salman", "khan", 56, 5.8);
// console.log(user3.about());
// console.log(user3.is18());
// console.log(user3.tall());


let userMethod = {
    is18(){
        if(this.age>=18){
            console.log(`is ${this.name} Adult? : Yes`);
        }else{
            console.log(`is ${this.name} Adult? : No`);
        }
    },
    isPoor(){
        if(this.income<500000){
            console.log(`is ${this.name} Poor? : Yes`)
        }else{
            console.log(`is ${this.name} Poor? : No`)
        }
    },
    summary(){
        let annot = ""
        if(this.gender === "Male"){
            annot = "His"
        }else{
            annot = "Her"
        }
        console.log(`${this.name} is ${this.age} years old. ${annot} nationality is ${this.nationality}. Currently working as ${this.profession} and earns ${Math.floor(this.income/12)} per month.`);
    }
}

function createUser(name, gender, age, income, nationality, profession){
    let user = Object.create(userMethod);
    user.name = name,
    user.gender = gender,
    user.age = age,
    user.income = income
    user.nationality = nationality,
    user.profession = profession
    // user.is18 = userMethod.is18,
    // user.isPoor = userMethod.isPoor
    // console.log(`Name:${user.name}, Age: ${user.age}, Income: ${user.income}`);
    return user;
}
let user1 = createUser("Moazrt", "Male", 58, 727511, "American", "Music Composer");
// console.log(user1);
// user1.is18();
// user1.isPoor();
user1.summary();