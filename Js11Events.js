let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    // alert("I was clicked")
    document.querySelector("box").innerHTML = "<b>Hi there</b> , nice to be clicked ";
})