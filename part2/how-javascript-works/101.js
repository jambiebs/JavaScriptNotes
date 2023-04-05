// function func(){
//     let counter = 0;
//     return function(){
//         if(counter < 1){
//             console.log("Hi You Called me");
//             counter++;
//         }else{
//             console.log("Mai already ek bar call ho chuka hoon!");
//         }
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();

function track(){
    counter = 0;
    function track2(){
        if(counter<1){
            console.log("You called me!")
            counter++;
        }else {
            console.log("I am already called!")
        }
    }
    return track2;
}

let ans = track();
ans();
ans();
ans();
ans();
ans();

















