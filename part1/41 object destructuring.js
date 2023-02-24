// // // // object destructuring
// // // const band = {
// // //   bandName: "led zepplin",
// // //   famousSong: "stairway to heaven",
// // //   year: 1968,
// // //   anotherFamousSong: "kashmir",
// // // };

// // // let { bandName, famousSong, ...restProps } = band;
// // // console.log(bandName);
// // // console.log(restProps);





// // // custom code by --jamal




// // // self homework


// // const giridih = {
// //   area : "unknown",
// //   localGang : "so many",
// //   president : "anyone",
// //   cleanliness : 0
// // }
// // let { area, localGang, president, ...restOther} = giridih;
// // console.log(Array.isArray(localGang));
// // console.log(restOther);
// // // for(let key in giridih){
// // //   console.log(`${key} : ${giridih[key]}`);
// // // }
// // // try yourself




// // // const district = {
// // //     jharkhand: "Giridih",
// // //     maharashtra: "Pune",
// // //     Gujrat: "ahamdabad",
// // //     Bihar: "mughalsarai",
// // //     "U.P": "Paryagraj"
// // // }

// // // for(let dist in district){
// // //     console.log(dist, ":", district[dist]);
// // // }
// // // let{jharkhand,maharashtra,...restOther} = district;
// // // // console.log(jharkhand);
// // // // console.log(maharashtra);
// // // console.log(restOther);












// // // obj destructuring

// // let newObj = {
// //     village: "bishanpur",
// //     state: "jharkhand",
// //     "post office": "pachamba",
// //     country: "India",
// // }

// // let {village, "post office": po, ...allOther} = newObj;
// // // while obj destructuring we cannot store something in a string that's whay "post office": po;
// // console.log(village);
// // console.log(po);
// // console.log(allOther);
// // console.log(newObj);







// // obj destructuring

// let nameAge = {
//   x: 25,
//   y:40,
//   z:15,
//   "x and y": 65
// }

// let {x:a,y:b,z:c,["x and y"]:d} = nameAge;
// console.log(a)
// console.log(b);
// console.log(c);
// console.log(d);
// // let {x,y,z,["x and y"]:xy} = nameAge;
// // console.log(x);
// // console.log(y);
// // console.log(z);
// // console.log(xy);

// const person = {
//   uname: "ashok",
//   age: 28,
//   nature: "calm",
//   ethnicity: "homo"
// }

// const {uname:a, age:b, nature:c, ethnicity:d} = person;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// const obj = { 
//   a: 1, 
//   b: { c: 2 } 
// };
// // const {a, d} = obj; // d is returning undefined
// const {a, b: { c: d }} = obj;
// console.log(a);
// console.log(d);


const numbers = [];
const obj = { 
  a: 1,
  b: 2 
};
({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers);
// The properties `a` and `b` are assigned to properties of `numbers`
