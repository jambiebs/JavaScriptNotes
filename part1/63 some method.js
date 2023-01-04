// // // some method 

// // const numbers = [3,5,11,9];

// // // kya ek bhi number esa hai jo even hai 
// // // true 

// // // const ans = numbers.some((number)=>number%2===0);
// // // console.log(ans);

// // const userCart = [
// //     {productId: 1, productName: "mobile", price: 12000},
// //     {productId: 2, productName: "laptop", price: 22000},
// //     {productId: 3, productName: "tv", price: 35000},
// //     {productId: 3, productName: "macbook", price: 25000},
// // ]

// // const ans = userCart.some((cartItem)=>cartItem.price > 100000);
// // console.log(ans);



// const userCart = [
//     { productId: 1, productName: "mobile", price: 12000 },
//     { productId: 2, productName: "laptop", price: 22000 },
//     { productId: 3, productName: "tv", price: 35000 },
//     { productId: 3, productName: "macbook", price: 25000 },
// ];

// const some = userCart.some(x => x.price <= 12001);
// console.log(some);


// some method

const array = [3,5,13,25,91,8];
const someMethod =array.some((x)=>{
    if(x>91){
        return x;
    }
});
console.log(someMethod);
















