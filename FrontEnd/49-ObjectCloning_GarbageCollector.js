
// normal Object giving

// let obj={
//     age:12,
//     wt:68,
//     ht:180
// };

// let a=obj;
// console.log(a);

// // add new key value in obj Object
// obj.color="white";
// console.log(a);



// Object cloning

// using spread operator
// let src={
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest={...src};
// src.age=90;
// console.log("src:",src);
// console.log("dest:",dest);


// using Object.assign
// let src={
//     age:12,
//     wt:68,
//     ht:180
// };

// let src2={
//     value:101,
//     name:"abc xyz"
// };

// // cloning 2 Object
// let dest=Object.assign({},src,src2);

// src.age=90;
// console.log("src:",src);

// console.log("dest:",dest);


// using iterations
let src = { age: 12, wt: 68, ht: 180 };
let dest = {};

for (const key in src) {
    let newkey = key;
    let newvalue = src[key];
    dest[newkey] = newvalue;
}

console.log("dest:", dest);