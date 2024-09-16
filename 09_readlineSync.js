//reading user data

// readline-sync is just a package which helps us to create Command line interface. Or in other words it helps us to take data from user
const readlineSync = require("readline-sync");
/*
const userName = readlineSync.question("What is your name? ");
console.log(`Welcome ${userName} thanks for visiting us`);
const age = readlineSync.question("What is your age? ");
console.log(`your birthYear is ${2024 - Number(age)}`);
*/

let age = readlineSync.question("What is your age");
age = Number(age);

if(isNaN(age)){
    console.log("Please Enter your valid age");
}else{
    console.log(`your birthyear is ${2024 - age}`);
}

