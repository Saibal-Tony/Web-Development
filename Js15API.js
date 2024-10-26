// API - Application Programming Interface
// it is a middle man which takes some request and sends to the soures and then sends back some information if sources allows it to , it also contains API keys for secuirity purpose 
// like zomate can't use google maps directly , so if API allows it API shares the recommended data that can be shared to the end user from source

// AJAX - Asynchronous Js & XML -- XML format
// JSON - Js Object Notation

console.log("start")
const URL ="https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");

const getData = async () => {
    let response = await fetch(URL); // get request | Delete - to delete the content / Patch - to update the content /  Post -  to send some request
    console.log(response); // -----> JSON format
    console.log(response.status) // just gives the status of the request 
    // 100 - 199 ---> informational response
    // 200 - 299 ---> successful response
    // 300 - 399 ---> redirection message 
    // 400 - 499 ---> client side error | not site present 
    // 500 - 599 ---> servor error 


    let data = await response.json(); // converting the data in form of js object 

    factPara.innerText = data[0].text; 
}

button.addEventListener("click" , getData);



// Money converter
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];

  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});

