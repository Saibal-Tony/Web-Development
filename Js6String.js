console.log("String")

let a = "Saibal"
console.log(a);
console.log(a[1]); // prints the first character

console.log(a.length);

let friend_1 = "Saibal";
let friend_2 = "Ayush";
console.log("My name is " + friend_1 + " and my best friend is " + friend_2);

console.log(`My name is  ${friend_1} and my best friend is ${friend_2}`); // works same as above
// we also use "" & '' in this format

console.log(" my name is ton\"y ") // \ - was given to understand that " is in the sentence , not the end
// \n - new line ; \t - tab

console.log(friend_1.toUpperCase());
console.log(friend_1.toLowerCase());

console.log(friend_1.slice(2 , 4)); // cuts the word from the start till end
console.log(friend_1.slice(3)); // it starts to slice from the given location

console.log(friend_1.replace("ai" , 81)); // replaces that old value to new given value ; and it only replaces once

console.log(friend_1.concat(friend_2)); // we can also join two things together
console.log(friend_1.concat(friend_2 , "Friends" , "School")); // we can also pass multiple words

console.log(friend_1.charAt(3)); 
console.log(friend_1.indexOf("b")); // checks for location, if not found then -1