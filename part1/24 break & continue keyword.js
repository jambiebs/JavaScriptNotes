// break keywork

// continue keyword 

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hello there")



// break and continue keyword

// for(let i = 0; i<=10; i++){
//     if(i===7){
//         break;
//     }
//     console.log(i);
// }


// break & continue

const array = [1,5,7,10,14,19,24,29,31];
// break
for(let i = 0; i<array.length; i++){
    if (array[i]%3 === 0){
        console.log(array[i] + " this number is divisable by 3");
        break;
    }
    console.log(array[i]);
}
for(let i = 0; i<array.length; i++){
    if (array[i]%3 !== 0){
        console.log(array[i] + " this number cannot be divided by 3");
        continue;
    }else{
        console.log(array[i] + " divided by 3");
    }
    console.log(array[i]);
}

