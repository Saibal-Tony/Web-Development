console.log("Hellow World")


//There are three things in the HTML (Text Node ; Comment Node ; Element )

document.body; // shows all the contexts of the HTML
document.body.childNodes; //to see all the child class present in it 
document.body.childNodes[0]; //prints the first child of the class
document.body.childNodes[0].childNodes; // shows the sub child of the class

// This new line causes "Text Node" which is after the class container and before box1 container. If we start directly after the container class then this text Node is ignored

//if we say ,
let cont = document.body.childNodes[1] //then we can access the sub child element through cont
//like, 
cont.childNodes[0]

// to see only the element child without the text nodes
cont.firstElementChild

cont.firstElementChild.parentElement // to find the parent of that childclass

cont.firstElementChild.childNodes // prints everything -[ Text Nodes + Comment Nodes + Element ]
cont.firstElementChild.children // to print only elemnts 
cont.firstElementChild.children[0] // to print the first element

document.body.children

document.firstElementChild.children[0]

