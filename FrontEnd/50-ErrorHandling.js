

// try {
//     console.log("try block starting");
//     console.log(x);
//     console.log("try block ending");
    
// }
// catch (err) {
//     console.log("inside catch block");
//     console.log("your error: ",err);
    
// }
// finally{
//     console.log("finnally run every time.");
// }


// try {
//     console.log(x);
// }
// catch (err) {
//     throw new Error("error a gaya bhai");
// }



// let errcode=100;
// if(errcode==100){
//     throw new Error("invalid Json");
    
// }


function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
console.log(divide(20,10));
