console.log("Welcome");

// getting the element by the class name
let boxes = document.getElementsByClassName("box");

boxes[2].style.backgroundColor = "green"

// getting the element by the ID name
document.getElementById("red").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "blue"; // selects the first box

// document.querySelectorAll(".box").style.backgroundColor = "blue"; // this can't be accessed like this because .quarySelectorAll returns in nodelist form so we can put properties in the element form 

document.querySelectorAll(".box").forEach(e=>{ // so we have to iterate every node then use it 
    e.style.backgroundColor = "aqua";
})

document.getElementsByTagName("div"); // returns all the div named elements

e = document.getElementsByTagName("div")
e[0].matches("#red"); // returns true or false
            // # - id is accessed by this 
            // . - class is accessed by this

e[0].closest("container"); // prints the closest 

document.querySelector(".container").contains(e[2]); // returns true or false

