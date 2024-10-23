// API - Application Programming Interface
// it is a middle man which takes some request and sends to the soures and then sends back some information if sources allows it to , it also contains API keys for secuirity purpose 
// like zomate can't use google maps directly , so if API allows it API shares the recommended data that can be shared to the end user from source

console.log("start")
const URL ="https://cat-fact.herokuapp.com"

const getData = async () => {
    let response = await fetch(URL);
    console.log(response);
    console.log(response.status) // gives just the status
}