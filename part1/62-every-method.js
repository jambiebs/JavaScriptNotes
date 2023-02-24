// // every method
// // const numbers = [2,4,6,9,10];
// // every method is used to check all the value of an element if it meets the condition or not and return boolean

// // const ans = numbers.every((number)=>number%2===0);

// // console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]


// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);

















// // practice


// const numbers = [42,82,45,66,44];
// const check = numbers.every((numbers)=>numbers%2===0);
// console.log(check);
// const fnd = numbers.find((numbers)=>numbers%2!==0);
// console.log(fnd);




// // till now what methods i learn
// // forEach
// // map
// // reduce
// // filter
// // sort
// // every
// // find






// every method


const numbers = [6,9,12,18,81,21];
let every = numbers.every((number)=>number%3===0);
console.log(every);

const userCart = [
        {productId: 1, productName: "mobile", price: 12000},
        {productId: 2, productName: "laptop", price: 22000},
        {productId: 3, productName: "Xiome Led SmartTv", price: 55000},
    ]
let isBelow30 = userCart.every((x)=>x.price<30000);
let find = userCart.find((x)=>{
    if(x.price>30000){
        return x;
    }
})
if(isBelow30===true){
    console.log("Great Selection! Go ahead and checkout!");
}else {
    console.log("Sorry but according to your card policy you can not buy an item priced more than 30k");
    console.log(`please remove "${find.productName}" from your cart, which has price of ${find.price} Rupees.`);

}




