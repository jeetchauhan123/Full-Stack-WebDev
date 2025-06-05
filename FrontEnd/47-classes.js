

// function sayname(myname="jiingola") {
//     console.log("my name is:", myname);
// }
// sayname("dabba");


// function sayname(fname="work",lname="proper") {
//     console.log("my name is:",fname,lname);
// }
// sayname();


// paarameter dependent on another parameter
// function sayname(fname="work",lname=fname.toUpperCase()) {
//     console.log("my name is:",fname,lname);
// }
// sayname();


// object and array as a default parameter
// function solve(value={age:15,wt:90,ht:190}) {
//     console.log("namaste:",value);
// }
// solve();
// function solve(value=["abc","sfg","jfc"]) {
//     console.log("namaste:",value);
// }
// solve();



// function as a parameter
function getage() {
    return 190;
}
function util(name="able",age=getage()) {
    console.log(name,age);
}
util();







// class human {

//     // properties/
//     age=13;     //public
//     #wt=80;     //private
//     ht=180;


//     constructor(newage,newht,newwt) {
//         this.age=newage;
//         this.ht=newht;
//         this.#wt=newwt;
//     }


//     // behaviour
//     walking(){
//         console.log("walking", this.#wt);
//     }
//     running(){
//         console.log("running");
//     }

//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifywt(val){
//         this.#wt=val;
//     }
// }

// const obj = new human(50, 190, 101);
// console.log(obj.fetchWeight);
// obj.walking();
