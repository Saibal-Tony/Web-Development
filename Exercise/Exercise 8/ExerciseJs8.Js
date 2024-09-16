let a = 6;

function factorial(number){
    let arr = Array.from(Array(number + 1).keys())
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}

function facFor(number){
    let fac = 1;
    for (let idx = 1; idx <= number; idx++) {
        fac = fac * idx;
    }
    return fac;
}

function facMult(number){
    while (number === 0) {
        return 1;
    }
    console.log("Fac Recurssion")
    return facMult(number - 1) * number;
}

console.log(factorial(a));
console.log(facFor(a));
console.log(facMult(a));