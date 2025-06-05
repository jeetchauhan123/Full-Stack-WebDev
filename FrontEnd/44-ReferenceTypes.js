// let obj={
//     name:"abc",
//     age:25,
//     weight:85,
//     height:"6ft 1in",
//     greet: function () {
//         console.log("kem cho maja ma");
//     }
// }
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));



// let arr=[1,2,3,4,5];
// console.log(arr);

// let brr=new Array('hello',1,true);
// console.log(brr);

// console.log(typeof(arr));
// console.log(typeof(brr));



// let brr=new Array('hello',100,true);
// brr.push('abc');
// brr.pop();

// brr.shift();
// brr.unshift("hello")

// brr.push(20);
// brr.push(40);
// brr.push(60);


// console.log(brr.slice(2,4));

// brr.splice(1,2,"kunal");
// brr.splice(1,0,"kunal");


// console.log(brr);


// let arr=[10,20,30];
// arr.map((num,index)=>{
//     console.log(num);
//     console.log(index);
// })

// const ansarr=arr.map((num)=>{
//     return num*num;
// })
// console.log(ansarr);


// let arr=[10,20,30,11,21,44,51];

// const array=arr.filter((num)=>{
//     return num%2==0;

//     // if(num%2 == 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// })
// console.log(array);


// let arr=[1,2,'hello','kunal',null];
// let ans=arr.filter((value)=>{
//     if(typeof(value)==='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);



// let filtered = [24, 33, 16, 40];
// let fill=filtered.filter((age)=>{
//     return age >= 18;
// });
// console.log(fill);


// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// }, 0)
// console.log(ans);


// let arr=[9,1,7,4,2,8];
// arr.sort();
// arr.reverse();
// console.log(arr);


// let arr=[10,20,30];
// arr.forEach((value,index)=>{
//     console.log("number: ",value," Index: ",index);
// })

// let arr=[10,20,30];
// let len=arr.length;
// console.log("length",len);

// for(let i=0;i<len;i++){
//     console.log(arr[i]);
// }


// let obj={
//     name:"abc",
//     age:25,
//     weight:85,
//     height:"6ft 1in",
//     greet: function () {
//         console.log("kem cho maja ma");
//     }
// }

// for(let key in obj){
//     console.log(key+":",obj[key]);
// }

// let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// let name1="namaste"
// for(let value of name1){
//     console.log(value);
// }



let arr=[10,20,30,40,50];
function sum(arr) {
    // let len=arr.length;
    // let sum=0;
    // for(let i=0;i<len;i++){
    //     sum=sum+arr[i];
    // }
    // return sum;

    let sum=0
    arr.forEach(num => {
        sum=sum+num;
    });
    return sum;
}
let total=sum(arr);
console.log(total);
