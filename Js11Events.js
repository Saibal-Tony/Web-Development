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

let modebtn = document.querySelector("#mode"); // changing the mode from dark to light
let color = "light";

modebtn.addEventListener("click", () =>{
    if(color === "light"){
        color = "dark";
        // document.querySelector('body').style.backgroundColor = "white" ; 
        document.querySelector('body').classList.add("dark");
        document.querySelector('body').classList.remove("light");
    }
    else{
        color = "light"
        // document.querySelector('body').style.backgroundColor = "black" ; 
        document.querySelector('body').classList.add("light");
        document.querySelector('body').classList.remove("dark");
    }

    console.log(color);
});

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