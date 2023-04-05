// Add new HTML elements to page 


// innerHTML to add html element

let todoList = document.querySelector(".todo-list");
let add = document.querySelector("input.btn");
add.onclick = function(){
todoList.innerHTML+= "<li><span id=\"text\"></span><div class=\"todo-buttons\"><button class=\"todo-btn done\">Done</button><button class=\"todo-btn remove\">Remove</button></div></li>";
}
let content = document.querySelector("#text");









// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')