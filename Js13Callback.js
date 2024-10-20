console.log("Saibal is a pro1"); //asynchronous actions
console.log("Saibal is a pro2");

// we all think that the code will run one by one ,  but for this case the setTimeout fuction will run after sone time, before that the code will run other codes ... like console.log 
setTimeout(()=>{
    console.log("I am in the timout section") // synchronous action
}, 2000) ; 

console.log("Saibal is a pro2");

// Callback -  it is a function passed as argument to another function 
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



function sum (a ,b){
    console.log(a+b);
}
function calculator(a ,b , sumCallback){
    sumCallback(a,b);
}
calculator(1 ,3, sum); // sum is the callback function

// we can directly use the function too
// calculator(1 ,2 , (a,b)=>{
//     console.log(a + b);
// })

// callback hell - nesting of callback functions
function getData( data, getNextData){
    setTimeout(()=>{
        console.log("data" + data);
        if(getData){
            getNextData();
        }
    },2000);
}

// getData( 1 , getData(2)) ; // it's wrong because we can't pass paratemers in the calback function 
getData(1 , ()=>{
    getData(2 , ()=>{
        getData(3 , ()=>{
            getData(4)
        })
    })
}) 

// Promises - to counter callback hell we use promises
// 3 states - pending | resolved | rejected
// let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise"); // if nothing given then status is pending
//     resolve("successful") // it give the status fulfilled 
//     reject("some error found") // it gives the status rejectted
// });

const promise = () => {
    return new Promise((resolve , reject) => {
        console.log("I am work")

        resolve("successful")
        reject("network error")
    });
};
// then
let promse = promise();
promse.then((res)=>{ // then - done when you promise is fulfullied ; res - we can also pass the resolve value
    console.log("promise fulfilled" , res)
});
//catch
promse.catch((err) =>{ // catch - done when promise is unsuccessful ; err - we can use it to print error message
    console.log("error" , err);
});

// Resolve
let prom1 = new Promise((resolve, reject) => {
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
let prom2 = new Promise((resolve, reject) => {
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