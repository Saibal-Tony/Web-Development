console.log("Hello I am conditional tutorial")

let age = 45;
let grace = 2;

console.log(age + grace);
console.log(age - grace);  
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace); // exponent
console.log(age % grace); // modulus

// Comparison operator
// == ; != ; === - equal value and type ; !== - not equal value and type ; ? - ternary opretaor ; += ; -= ;

let a = 10;
let b = 20;
let c = 22;
console.log("your ans" + a > b ? (a - b): (b - a));

// Logical Operator
// && - and ; || - or ; ! - not

// REPL - Read Evaluate Print 

if(age > 18){
    console.log("You can drive")
}
else{
    console.log("You can't drive")
}