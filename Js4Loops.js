console.log("Hi this is loops")
/* for loop ; forin loop ; forof loop ; foreach loop ; while loop ; do while loop */

let a = 1;

// for loop
for (let i = 0 ; i < 100 ; i++) {
    console.log(a + i); 
}

// forin loop
let obj ={
    name: "Tony" , 
    role: "Programmer" ,
    company: "None"
}
// for printing the objects 
for (const key in obj) {
    const element = obj[key];
    console.log(key , element)
}


// forof loop
for (const c of "Saibal") {
    console.log(c); // prints all the charaters in the String "Saibal"
}

// while loop
let i = 10;
while(i < 20){
    console.log(i);
    i += 1;
}

// do while loop
let n = 10;
do{
    console.log(n);
    n++ ;
}while(n < 20);