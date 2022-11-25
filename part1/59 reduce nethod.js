// reduce 
// const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                12000                12000
// 12000            22000                34000
// 34000            15000                49000








// practice
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentvalue) => {
//     return accumulator + currentvalue;
// }, 0)
// console.log(sum);



const myCart = [
    { productId: 1, productName: "samsung tv", price: 3000 },
    { productId: 2, productName: "samsung mobile", price: 3000 },
    { productId: 3, productName: "samsung earphone", price: 3000 },
    { productId: 4, productName: "samsung charger", price: 3000 },
    { productId: 5, productName: "samsung lapatop", price: 3000 },
    { productId: 6, productName: "samsung watch", price: 3000 },
    { productId: 7, productName: "samsung sd card", price: 3000 }
]
// using arrow function
const cartValue = myCart.reduce((x, y) => {
    return x + y.price;
}, 0)                                               // 0 is initial value
console.log(cartValue);

// using function in const
function cartValue1(a, b){
    return a + b.price;
}
const myCartValue = myCart.reduce((cartValue1), 0);   // 0 is initial value
console.log(myCartValue);
// using traditional fucntion
function cartValue2(c,d){
    return c + d.price;
}
console.log(myCart.reduce((cartValue2), 0));  // 0 is initial value


const newSumValue = [86,45,2,55,8,645,166,541];
const newsum = newSumValue.reduce((a,b)=>{
    return a+b;
});
console.log(newsum);