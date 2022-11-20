// // object destructuring
// const band = {
//   bandName: "led zepplin",
//   famousSong: "stairway to heaven",
//   year: 1968,
//   anotherFamousSong: "kashmir",
// };

// let { bandName, famousSong, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);





// custom code by --jamal




// self homework


const giridih = {
  area : "unknown",
  localGang : "so many",
  president : "anyone",
  cleanliness : 0
}
let { area, localGang, president, ...restOther} = giridih;
console.log(Array.isArray(localGang));
console.log(restOther);
// for(let key in giridih){
//   console.log(`${key} : ${giridih[key]}`);
// }





// try yourself




// const district = {
//     jharkhand: "Giridih",
//     maharashtra: "Pune",
//     Gujrat: "ahamdabad",
//     Bihar: "mughalsarai",
//     "U.P": "Paryagraj"
// }

// for(let dist in district){
//     console.log(dist, ":", district[dist]);
// }
// let{jharkhand,maharashtra,...restOther} = district;
// // console.log(jharkhand);
// // console.log(maharashtra);
// console.log(restOther);












// obj destructuring

let newObj = {
    village: "bishanpur",
    state: "jharkhand",
    "post office": "pachamba",
    country: "India",
}

let {village, "post office": po, ...allOther} = newObj;
console.log(village);
console.log(po);
console.log(allOther);