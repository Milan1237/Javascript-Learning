/* 
     * * * * *
     * * * *
     * * *
     * *
     * 
*/
/*const symbol = "* ";
for(let i = 5 ; i > 0 ; i--){
    console.log(symbol.repeat(i));
}
    */

/* 
    *
    * *
    * * *
    * * * * 
    * * * * *
    * * * *
    * * *
    * * 
    * 
*/
/* 
const symbol = "* ";
for(let i = 1 ; i <= 5 ; i++){
    console.log(symbol.repeat(i))
}
for(let i = 4 ; i > 0  ; i--){
    console.log(symbol.repeat(i))
}
    */

// Check how many vowel is there in a string

const str = "I am healed";
const vowel = "aeiouAEIOU";
let vowelCount = 0 ;

for(let i = 0 ; i<str.length ; i++){
    if(vowel.includes(str[i])){
        vowelCount++ ;
    }
}
console.log(`The vowel count is ${vowelCount}`);