/* 
Decoding and Encoding Exercise
input    ->    output1   ->output2
geeks    ->    iggmu     ->geeks

*/

const readlineSync = require("readline-sync");
const input = readlineSync.question("Give me the string");
let encode = "";
let decode = "";

for(let i = 0 ; i < input.length ; i++){
    let asciiCode = input.charCodeAt(i);//takes a charector or a index of a strinng and return the ascii code of the charector
    asciiCode += 2 ;
    encode += String.fromCharCode(asciiCode);
}
for(let i = 0 ; i < encode.length ; i++){
    let asciiCode = encode.charCodeAt(i);//takes a charector or a index of a strinng and return the ascii code of the charector
    asciiCode -= 2 ;
    decode += String.fromCharCode(asciiCode);//takes ascii value of a charecter and returns the charector
}

console.log(encode);
console.log(decode);
