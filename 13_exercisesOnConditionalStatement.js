const readlineSync = require("readline-sync");
const word1 = readlineSync.question("Give me the first word");
const word2 = readlineSync.question("Give me the second word");
const word3 = readlineSync.question("Give me the third word");

const word1Length = word1.length;
const word2Length = word2.length;
const word3Length = word3.length;

if(word1Length < word2Length && word1Length < word3Length){
    console.log(`${word1} is the smallest word`);
}else if(word2Length < word1Length && word2Length < word3Length){
    console.log(`${word2} is the smallest word`)
}else if (word3Length < word2Length && word3Length < word3Length){
    console.log(`${word3} is the smallest word`);
}else{
    console.log('two or more smallest are there')
}