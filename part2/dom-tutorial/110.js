// innerHtML 
const headline = document.querySelector("#main-heading");
console.log(headline.innerHTML); // please note that HTML should be in capital
console.log(headline.innerText); // it will only return the text that is meant to display for user
console.log(headline.textContent); // it will return every text that contains inside;
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>" 
// console.log(headline.innerHTML);

const button = document.querySelector(".headline");
console.log(button.innerHTML);
let newBtn = button.innerHTML+= "<br><button class=\"btn btn-headline\"><a href=\"https://www.google.com/search?q=learn+to+manage+task\" target= \"blank\">Learn more on google</a></button>";
let button2 = document.querySelector("button.btn.btn-headline a");
button2.setAttribute("href", "https://www.bing.com/search?q=learn+to+manage+task");
button2.setAttribute("target", "_blank");

console.log(button2.getAttribute("href"));