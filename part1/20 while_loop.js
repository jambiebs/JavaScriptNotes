// // while loop 

// // 0 se 9 
// // dry don't repeat yourself
// // let i = 0; // 1 2 3 4

// // while(i<=9){
// //     console.log(i);
// //     i++;
// // }
// // console.log(`current value of i is ${i}`);
// // console.log("hello");
// // let i = 0;
// // while(i<=50){
// //     console.log(i);
// //     i++;
// // }






// // custom code by --jamal



// // try yourself



// // let i = 0;
// // while(i<=100){
// //     console.log(i);
// //     i++
// // }

// let i = 100;
// while(i<=1000){
//     console.log(i);
//     i = i+100;
// }



// create a programme to generate table 
// let i = 2;
// let t = i*10;
// let u = i;
// while (i<=t){
// table.innerHtml = i;
//     i = i+u;
// }





// chat gpt
let i = 4;
let tof = i;
let t = i*10;
let u = i;
let n = 1
while (i<=t) {
  let row = document.createElement("tr");  // create a new table row element
  let cell1 = document.createElement("td");  // create a new table cell element for column 1
  let cell2 = document.createElement("td");  // create a new table cell element for column 2
  cell1.innerHTML = `${n} x ${tof}`;
  n++; // set the HTML content of cell 1 to the current value of i
  cell2.innerHTML = i;  // set the HTML content of cell 2 to twice the current value of i
  row.appendChild(cell1);  // append cell 1 to the row
  row.appendChild(cell2);  // append cell 2 to the row
  document.querySelector("table").appendChild(row);  // append the row to the table
  i=i+u;  // increment i
}
// to be solved later

