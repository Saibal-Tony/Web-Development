console.log("Hey There")

var a = 5; // int
var b = 7;

var c = "Saibal" // string

let d = 6; // global varibale

console.log(a + b);

{
    let d = 55;
    console.log(d) // 55
}
console.log(d) // 6

console.log(typeof a, typeof b , typeof c);

const a1 = 6; // the value of a1 cannot be changed  
// a1 = a1 + 6; --> not allowed

let x = "Tony"
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null; // type of null is object --> previously when made it was defined as object , but it's not correct , now we can't change becuase many layouts depends on it

// Object
let o = {
    name: "Saibal" , 
    "job code": 3400, // job code is in qoutes because there is space in between
    printMarks1 : function(){  // defining a function
        console.log('marks : 81.5% ');
    },
    printMarks2(){  // defining a function
        console.log('marks : 81.5% ');
    }
 }

 const stud ={
    marks: 1000,
 };

 // to use the properties & methods of one class in another class
 stud.__proto__ = o // we can use o class properties in stud ; _ _proto_ _ - it is a refernece to an object , it ca be null 
 console.log(stud.name);

 // we can also add new properties in o
 o.salary = "100 crores";

 //we can also change the value
 o.salary = "500 crores";

 // Class
  class car{
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
  }

  let maruti = new car(); // making an object 

  console.log(maruti.start()); 

// Inheritence
  class parent{
    constructor(){
        console.log("I the parent constructor")
    }
    body(){
        console.log("tall");
    }
  }

  class child extends parent{ // doing inheritence 
    constructor(name){
        super()  // it need to be declared if inheritence is used ; we use super to access the constructor of parent class 
    }
    color(){
        super.body(); // to access from the parent class
        console.log("fair");
    }
  }

  let tony = new child("tony");

  // try & catch - to give a particular condition if the code throws an error

  a = 10;
  b = 2;

  console.log(a + b);
  console.log(a + b);
  try{
    console.log(a + c); // if this line has any error then it will enter catch block and print the error
  }
  catch(err){
    console.log(err);
  }
  console.log(a + b);
  console.log(a + b);
  a + b