// syntax 
// str.indexOf(charecter , the starting index from where the charecter will be searched ) ; the second arguement is not compulsory
let str = "abcdefabcdef";
// console.log(str.indexOf('a' , 3)); 
console.log(str.indexOf('abc' , 3)); //we can also search a particular substring under a string




/* 
Make a password validation with indexOf
*/

const readlineSync = require("readline-sync");
let validated = false ;
const validatePassword = text => (text.indexOf('@') == -1) ?  false : 
                                  (text.indexOf('&') == -1) ? false : true      ; // returns the index of given charecter in the string and if not present then it returns -1 

while(validated == false){
    const password = readlineSync.question("Enter Your Password");
    validated = validatePassword(password);
    (!validated)? console.log("your password shoud have @ and &") : console.log("password taken");
}
