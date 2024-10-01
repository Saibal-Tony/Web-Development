// async function getData(){ // simulates getting data from the server
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             resolve(455)
//         },3500);
//     })
// }

async function getData(){ // simulates getting data from the server
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
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