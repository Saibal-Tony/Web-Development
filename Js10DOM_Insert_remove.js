console.log("HI there");

document.querySelector(".box");// give the first box

document.querySelector(".box").innerHTML; // prints all the content of the HTML , including the text and the html content

document.querySelector(".box").innerText; // prints only text content of the html

document.querySelector(".box").outerHTML // prints the content of the HTML as well sa that HTML also

document.querySelector(".box").tagName // give the tag name

document.querySelector(".box").textContent // print the text with hidden contents

document.querySelector(".box").hidden = true ; // make the centent hidden so that it can't be seen 
// same as like this : <div class="box" hidden> Hey I am box </div>

document.querySelector(".box").hasAttribute("style"); // give true or false

document.querySelector(".box").getAttribute("style"); // shows the style attribute

document.querySelector(".box").setAttribute("style" , "display : inline"); // sets the attribute given

document.querySelector(".box").attributes; // give all the attributes

document.querySelector(".box").removeAttribute("style"); // removes the attributes

// Important
document.designMode = "on" // can apply changes to any webpage

// we can also create custom attributes ( data- )
// <div class="box" hidden data-createdby = "Saibal" data-concetby = "Tony"> Hey I am box </div>
// where , createdby is key & Saibal is the value ; these two are available as key & value pair
document.querySelector(".box").dataset ;

// Insertion Method
let DIV = document.createElement("div"); // DIV - is the empty continer which hold the value ; div - is an empty element created but not seen in DOM until appended
DIV.innerHTML = "Hi there , nice to meet you <b>Tony</b>";
DIV.setAttribute("class" , "created"); // class - "created" - made a class name created
document.querySelector(".container").append(DIV); // we can see this appended at the end (inside)
// .prepend() --> this will ne added at the start of the node(inside)
document.querySelector(".container").before(DIV); // add before .container --> add before the node(outside)
// .after() --> adds after the node(outside)

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterward" , "Hey there all") // afterbegin ; afterbegin ; beforeend ; afterend

document.querySelector(".container").classList ; /// lists down all the classes
document.querySelector(".container").classList.add("tony"); // a new tony class is added
document.querySelector(".container").classList.remove("tony"); // tony class is removed 
document.querySelector(".container").classList.toggle("tony"); // toggle - if the class is present then it will be removed , and if not present then added
