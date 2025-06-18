
let fpromise=new Promise((resolve, reject) => {
    console.log("Namaste");
    resolve(1001);
    reject(new Error("Error statement"));
})


// function sayname() {
//     console.log("ye mera name hai");
// }

// setTimeout(function sayname() {
//     console.log("ye mera name hai");
// },10000)



// let fpromise=new Promise((resolve, reject) => {
//     setTimeout(function sayname() {
//         console.log("ye mera name hai");
//     },5000)
//     resolve(1);
// });



// let promise1=new Promise((resolve, reject) => {
//     let success=false;
//     if (success) {
//         // resolve("Promise Fulfilled");
//         resolve(10);
//     } else {
//         // reject("Promise Rejected");
//         reject("Internal server error");
//     }
// });

// promise1.then((message)=>{
//     console.log("then ka message: "+message);
// }).catch((error)=>{
//     console.log("Error: "+error);
// })


// promise1.then((message)=>{
//     console.log("First message: "+message);
//     // return "Promise Fulfilled second message";
//     return 20;
// }).then((message)=>{
//     console.log("second msg: "+message);
//     // return "Promise fulfilled third message"
//     return 30;
// }).then((message)=>{
//     console.log("thirs msg: "+message);
// }).catch((error)=>{
//     console.error(error);
// }).finally((message)=>{
//     console.log("finally block hamesha chalega");
    
// })


let promise1=new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"First");
})

let promise2=new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"Second");
})

let promise3=new Promise((resolve, reject) => {
    // setTimeout(resolve,4000,"Third");
    setTimeout(reject,4000,"Third");
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.error("error: "+error);
})