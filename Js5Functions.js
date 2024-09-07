console.log("Hey there");
console.log("Hey you");
console.log("Hey Tony");
console.log("Hi");

function greet(name){
    console.log("Hey " + name + " you are nice.");
    console.log("Hey " + name + " you have a nice day.");
    console.log("Hey " + name + " you look great.");
}

greet("Saibal"); // function call
greet("Tony");

function sum (a , b){
    return a + b;
}

let res1 = sum( 2 , 4); // if you pass only one parameter then it will throw an error --> NaN (Not a Number)
console.log(res1);

function bigsum (a , b , c = 4){
    return a + b + c;
}
let res2 = bigsum( 2 , 4); // it will use the default value of c;
let res3 = bigsum(10 , 20 , 10); // it will use the value of c given in the parameter;
console.log(res2);

const func = (x)=>{
    console.log("I am an arrow function: " , x);
}
func(34);
func(81);