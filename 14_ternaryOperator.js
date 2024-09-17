// Ternary operator is just a shorthand method of writing conditional statements

const marksObtained = 80 ;

// Simple Ternary Operator 
/* let result = (marksObtained > 40) ? "You have passed" : "You have failed. better luck next time"
console.log(result); */

let result = marksObtained < 40 ? "better luck next time" :
            marksObtained < 60 ? "you have passed with grade a":
            marksObtained < 80 ? "you have passed with grade A+":
            "You are genius" ;
    console.log(result);

const word1 = "Apple";
const word2 = "Banana";
const word3 = "Kiwi";

const shortestWord = (word1.length < word2.length && word1.length < word3.length) ? word1 :
                    (word2.length < word1.length && word2.length < word3.length) ? word2 :
                    (word3.length < word1.length && word3.length < word2.length ) ? word3 :
                    "there is two or more word which is short";

console.log(shortestWord);

                                