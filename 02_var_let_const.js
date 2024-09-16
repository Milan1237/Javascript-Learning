// creating a variable with var and playing with it
var message; //intializing or declaring a variable
message = "I am the new version of Milan"; // This is how we assign a value to a variable
console.log(message);
message = "Message Updated"; // This is how we assign a value to a variable
var message = "redeclareration" ; //  **imp** with variable created with var we can also redeclare a variable with same name but we can not perform this operation with let or const
console.log(message); //we can change a value of a variable if variable is declared with var or let
var mytext = 4 ; //we also can declare and assign a value in the same time

//creating a variable with let and playing with it

let text ; //initializing a variable
text = "My name is new text" ; //assigning a value
text = "I am updated" ; //modyfying a variable's value
console.log(text);
let newText = "my name is new text" //declaring and assigning a value to a variable at the same time

//creating a variable with const and playing with it

// const name ; // this is wrong because const variable must be declare and assigned a value at the same time
const myname = "Milan";
// myname = "Milan Das" // this is wrong because const variable's value can not be changed