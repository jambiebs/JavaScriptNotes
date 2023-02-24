// if 
// else if 
// else if 
// else if 
// else 

// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");




// practice
const temp = -15;
if (temp<=0){
    console.log("it is freezing outside");
}else if (temp<=10){
    console.log("it is cold outside");
}else if (temp<=20){
    console.log("little cold outside");
}else if (temp<=30){
    console.log("pleasant weather");
}else if (temp<=40){
    console.log("it is warm outside");
}else{
    console.log("it is extremly hot outside");
}




// my custom code --jamal

// let user = "jambiebs";
// let password = 24246120;
// let userGuess1 = prompt("Enter Username:");
// let userGuess2 = +prompt("Enter your password:");

// if(userGuess1 === user && userGuess2 === password){
//     alert("Login success!!");
// }else if(userGuess1 !== user){
//     alert("wrong userid!");
// }else{
//     alert("wrong password!")
// }















// let tempInDegree = 50;


// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello there");



// let tempInDegree = 4;

// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }

// console.log("hello");












// let temp = 102;
// if(temp<=10){
//     console.log("extremly cold", `temp is ${temp} degree celcius`);
// }
// else if(temp>10 && temp<=20){
//     console.log("its cold outside", `temp is ${temp} degree celcius`);
// }
// else if (temp>20 && temp<=30){
//     console.log("weather is good", `temp is ${temp} degree celcius`);
// }
// else if(temp>30 && temp<=40){
//     console.log("it's hot outside", `temp is ${temp} degree celcius`);
// }

// else{
//     console.log("it's extremly hot outside", `temp is ${temp} degree celcius`);
// }



// else if

// buying menu
// burger = 100
// pizz = 200
// chicken biryani = 300
// mutton biryani = 400
// VIP meal = 500

const money = 180;
if(money<100){
    result = `you'll need ${100-money} rupees more to buy a burger.`;
}else if(money<200){
    result = `you'll need ${200-money} rupees more to buy a pizza. however you can buy a burger and save ${money-100} rupees.`;
}else if(money<300){
    result = `you'll need ${300-money} rupees more to buy chicken biryani or you can buy a pizz and save ${money-200} rupees.`;
}else if(money<400){
    result = `you'll need ${400-money} rupees more to buy mutton biryani or you can buy chicken biryani and save ${money-300} rupees.`;
}else if(money<500){
    result = `you'll need ${500-money} rupees more to buy VIP meal or you can enjoy mutton biryani and save ${money-400} rupees`
}else{
    result = "congratulation you can enjoy VIP meal!"
}
console.log(result);
