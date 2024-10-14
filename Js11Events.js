let button = document.getElementById("btn");

button.onclick = () => {
    console.log("You clicked me");
}// if oyu declare multiple events the latest one will be prioratised 

// event object
button.onclock = (evt) => {
    console.log(evt);
    console.log(evt.type); // prints the type of event 
    console.log(evt.target); // the element you are targeting 
    console.log(evt.clientX , evt.clientY ); // prints the position 
}

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