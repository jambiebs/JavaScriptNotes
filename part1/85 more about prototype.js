// let numbers = [1,2,3];

// // console.log(Object.getPrototypeOf(numbers));
// console.log(Array.prototype);
// console.log(numbers);

// function hello(){
//     console.log("hello");
// }

/**********************************************************************************************/
//Phase One

// let ProductEvaluation = {
//     isCostly(){
//         if(this.price>5000){
//             return "Product is Costly."
//         }return "Product is Cheap."
//     },
//     isMadeInIndia(){
//         return this.origin==="India";
//     }
// }
// function Product(brand, buildYear, origin, price) {
//   let goods = Object.create(ProductEvaluation);
//   goods.brand = brand;
//   goods.buildYear = buildYear;
//   goods.origin = origin;
//   goods.price = price;
//   return goods;
// }

// let washingMachine = new Product("Samsung", 2019, "Japan", 5000);

// console.log(detail);
// console.log(washingMachine);
// console.log(washingMachine.isCostly());
// console.log(washingMachine.isMadeInIndia());
// console.log(washingMachine.isOld());
// console.log(Product.prototype);
// console.log(washingMachine.__proto__);
/**********************************************************************************************/
// Phase Two
// function Product(brand, buildYear, origin, price) {
//   this.brand = brand;
//   this.buildYear = buildYear;
//   this.origin = origin;
//   this.price = price;
// }

// Product.prototype.isOld = function () {
//   return this.buildYear < 2021;
// };

// Product.prototype.isCostly = function () {
//   if (this.price > 5000) {
//     return "Product is Costly.";
//   }
//   return "Product is Cheap.";
// };

// Product.prototype.isMadeInIndia = function () {
//   return this.origin === "India";
// };

// let washingMachine = new Product("Samsung", 2019, "Japan", 5000);
// function productSummary() {
//   for (let key in washingMachine) {
//     if (washingMachine.hasOwnProperty(key)) {
//       console.log(`${key}  :  ${washingMachine[key]}`);
//     }
//   }
// }
// productSummary();
// console.log(detail);
// console.log(washingMachine);
// console.log(washingMachine.isCostly());
// console.log(washingMachine.isMadeInIndia());
// console.log(washingMachine.isOld());
// console.log(Product.prototype);
// console.log(washingMachine.__proto__);
/**********************************************************************************************/
// Phase Three

class Product {
    constructor(brand, buildYear, origin, price){
        this.brand = brand;
        this.buildYear = buildYear;
        this.origin = origin;
        this.price = price;
    }
    isOld(){
        return this.buildYear < 2021;
    }
    isCostly(){
        if (this.price > 5000) {
            return "Product is Costly.";
          }
          return "Product is Cheap.";
    }
    isMadeInIndia(){
        return this.origin === "India";
    }
}
function productSummary(x){
    for(let key in x){
        console.log(`${key} : ${x[key]}`);
    }
}
let washingMachine = new Product("Samsung", 2019, "Japan", 5000);
let cooler = new Product("Voltas", 2022, "India", 4000);

productSummary(cooler);
// console.log(washingMachine);
// console.log(washingMachine.isOld());
// console.log(washingMachine.isCostly());
// console.log(washingMachine.isMadeInIndia());





