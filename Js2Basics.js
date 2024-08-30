console.log("Hey There")

var a = 5; // int
var b = 7;

var c = "Saibal" // string

let d = 6; // global varibale

console.log(a + b);

{
    let d = 55;
    console.log(d) // 55
}
console.log(d) // 6

console.log(typeof a, typeof b , typeof c);

const a1 = 6; // the value of a1 cannot be changed  
// a1 = a1 + 6; --> not allowed

let x = "Tony"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; // type of null is object --> previously when made it was defined as object , but it's not correct , now we can't change becuase many layouts depends on it

// Object
 let o = {
    name: "Saibal" , 
    "job code": 3400 // job code is in qoutes because there is space iin between
 }

 // we can also add new properties in o
 o.salary = "100 crores";

 //we can also change the value
 o.salary = "500 crores";