console.log("Saibal is a pro1"); //asynchronous actions
console.log("Saibal is a pro2");

// we all think that the code will run one by one ,  but for this case the setTimeout fuction will run after sone time, before that the code will run other codes ... like console.log 
setTimeout(()=>{
    console.log("I am in the timout section") // synchronous action
}, 2000) ; 

console.log("Saibal is a pro2");