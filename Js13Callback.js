console.log("Saibal is a pro1"); //asynchronous actions
console.log("Saibal is a pro2");

// we all think that the code will run one by one ,  but for this case the setTimeout fuction will run after sone time, before that the code will run other codes ... like console.log 
setTimeout(()=>{
    console.log("I am in the timout section") // synchronous action
}, 2000) ; 

console.log("Saibal is a pro2");

// Callback
const callback = (arg) =>{
    console.log(arg)
}
const loadScript = (src , useCallback) => {
    let sc = documnet.createElemnt("script");
    sc.src = src;
    sc.onload = callback("Tony");
    documnet.head.append(sc); 
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback);

// Resolve
let prom1 = new Promise((resolve, rejected) => {
    let ran = Math.random();
    if(ran < 0.5){
        console.log("Not supported")
    }
    else{
        setTimeout (() => {
            console.log("I am done");
            resolve("Stark");
        } , 3000);
    }
})
let prom2 = new Promise((resolve, rejected) => {
    let ran = Math.random();
    if(ran < 0.5){
        console.log("Not supported 2")
    }
    else{
        setTimeout (() => {
            console.log("I am done 2");
            resolve("Stark 2");
        } , 3000);
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err); // it prints the error in console manner
// })

let res = Promise.all([prom1 , prom2]) // this line runs only if all the resolves are true
res.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err); 
})

let res2 = Promise.allSettled([prom1 , prom2]) // this line runs no matter what the resolve is
res2.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err); 
})