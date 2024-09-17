const readlineSync = require("readline-sync");
const number = Number(readlineSync.question("Tell me a number"));
const remainder = number % 2 ;

if(remainder === 0){
    console.log("The number you have entered is Even");
    if(number % 4 == 0 ){
        console.log("the number can not be divisible by 4");
    }else{
        console.log("The number is even but it is not divisible by 4");
    }
}
else{
    console.log("The number is odd");
    if(number % 5 == 0){
        console.log("The number can be devided by 5");
    }
    else{
        console.log("The number is odd but it can't be devided by 5");
    }
}