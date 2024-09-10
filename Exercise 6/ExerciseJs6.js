let random = Math.random()

let a = console.log("Enter first no. : ");
let b = console.log("Enter second no. : ");
let c = console.log("Enter type of operation : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}


if (random > 0.1){
    alert(`The result is ${eval(` ${a} ${b} ${c} `)}`)
}
else{
    c = obj[c];
}