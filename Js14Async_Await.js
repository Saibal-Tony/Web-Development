// async function getData(){ // simulates getting data from the server
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

// async
function asyunc1(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        });
    });
}
function asyunc2(){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success")
        });
    });
}

console.log("Fetching the data");
asyunc1().then((res) =>{
    consolelog("fething the data 2");
    asyunc2().then((res) =>{
            console.log("fetching the data 3")
        });
    });

async function getData(){ // simulates getting data from the server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // getting the data
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    let data = await x.json() // then the data is parsed 
    console.log(x)
    return 445;
}

async function main(){
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");

    let data = await getData() // waits for the process to end, then load the next steps

    console.log(data);
    console.log("processing data");
    console.log("task 2");
}

main()