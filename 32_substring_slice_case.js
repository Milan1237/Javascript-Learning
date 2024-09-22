/* 
substring syntax
string.substring(start index , end index); returns a  new substring
*/

const userName = "Milan Kumar Das" ;
console.log(userName.substring(0 , 5));// returns a substring from the start number index to end number-1 index
console.log(userName.substring(-2 , 5));// assumes the start of from 0 if it < 0
console.log(userName.substring(0 , 20));// if end number is out of range then it returns only the whole string from the start number index
// *** Slice is a same process but it has subtle difference
console.log(userName.slice(0 , 5));
console.log(userName.slice(-10 , -5));// only difference is that if we give negative starting value then it counts from the end and also the end index should also be negative
console.log(userName.slice(0 , 20));

console.log(`upper case conversion ${userName.toUpperCase()}`);
console.log(`small case conversion ${userName.toLowerCase()}`);
