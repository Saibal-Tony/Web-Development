let button = document.getElementById("btn");

button.addEventListener("click", ()=>{ // dblclick - gives event after double click
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Hi there</b> , nice to be clicked";
})

button.addEventListener("contextmenu", ()=>{ // on right clicking the event happens
    alert("I was clicked")
})

document.addEventListener("keydown", ()=>{ // any button I press is being registered
    console.log(e.key) ;
})