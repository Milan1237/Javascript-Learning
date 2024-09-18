const readlineSync = require("readline-sync");
let number = Number(readlineSync.question("Give me a value less than 50"));


while(number >= 50){
    number = Number(readlineSync.question("Give me a value less than 50")); 
}
console.log("Number accepted");
