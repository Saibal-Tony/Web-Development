let random = Math.random()

console.log(random);

let a = console.log("Enter first no. : ");
let c = console.log("Enter type of operation : ");
let b = console.log("Enter second no. : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if (random > 0.1){
    alert(`The result is ${eval(` ${a} ${c} ${b} `)}`)
}
else{
    c = obj[c];
}