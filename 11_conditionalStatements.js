const readlineSync = require("readline-sync");
let number = Number(readlineSync.question("Tell me a number"));

if(number % 3 == 0 && number % 5 == 0){
    console.log("This number is divisible with 3 and 5")
}
else if(number % 3 == 0 || number % 5 == 0){
    console.log("this number can be devided with only 3 or 5");
}
else if (number % 7 == 0){
    console.log("this number is divisible by 7")
}
else{
    console.log("this number can not be devided by 3 , 5 or 7");
}