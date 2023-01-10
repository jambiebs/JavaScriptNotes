// select element using query selector

// const mainHeading = document.getElementById("main-heading");
// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading.innerHTML)
// mainHeading.innerHTML = "Do Not Manage Your Task ~Jam Al";
// const header = document.querySelector(".header");
let navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);
navItem = Array.from(navItem); // by this method you can change from array-like-object to array
console.log(Array.isArray(navItem));