const readlineSync = require('readline-sync') ;
const email = readlineSync.question('Enter Your email');

let i = 0 ;
let firstPart = ''; 
while(email[i] != '@'){
    firstPart+=email[i];
    i++ ; 
};
const secondPart = email.slice(firstPart.length);

const result = firstPart.split('').splice(0 ,Math.floor(firstPart.length/2)).join('') + '...' + secondPart;
console.log(result);
