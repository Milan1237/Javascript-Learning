//Comparison operators can be devided into two parts 
    // a> Equality Comparison Operators
    // b> Relational Comparison Operators


            //Equality Comparision Operator

//  "==" it compares the two value and return true if equal 
/* 
let a = 5;
let b = 6;
let c = '6';
const obj1 = {
    val1: "value",
    val2: "value2"
}
const obj2 = {
    value1: "value",
    value2: "value2"
}

console.log(a == b); //false
console.log(c == b); //true : converts c to a number and then compares with the number
console.log(obj1.val1 == obj2.value1); //true 
console.log(obj1.val1 == obj2.value2); //false: compares each charecter value
*/

//  "!=" it compares the two value and return true if not equal
/* 
let a = 5;
let b = 6;
let c = '6';
const obj1 = {
    val1: "value",
    val2: "value2"
}
const obj2 = {
    value1: "value",
    value2: "value2"
}

console.log(a != b); //true
console.log(c != b); //false : converts c to a number and then compares with the number
console.log(obj1.val1 != obj2.value1); //false 
console.log(obj1.val1 != obj2.value2); //true: compares each charecter value
*/

//  "===" it compares the two value and the type as well and return true if both value and type are equal 
/*
let a = 5;
let b = 6;
let c = '6';
const obj1 = {
    val1: "value",
    val2: "value2"
}
const obj2 = {
    value1: "value",
    value2: "value2"
}

console.log(a === b); //false as it's value are not equal
console.log(c === b); //false : the value are same but type are not same
console.log(obj1.val1 === obj2.value1); //true: both value and type are equal 
console.log(obj1.val1 === obj2.value2); //false: both value and type are not equal
*/
 

//  "!==" it compares the two value and the type as well and return true if  value and type both are not equal 
 /*
 let a = 5;
let b = 6;
let c = '6';
const obj1 = {
    val1: "value",
    val2: "value2"
}
const obj2 = {
    value1: "value",
    value2: "value2"
}

console.log(a !== b); //true : type are same  but value are not same
console.log(c !== b); //true : value are same but not string
console.log(obj1.val1 !== obj2.value1); //false : both value and type is same
console.log(obj1.val1 !== obj2.value2); //true : value are not same yet type are same
*/

                        //Relational Comparision Operator

/*let x = 2 ; 
let y = 3 ; 
let z = "4";

console.log(x > y); //false
console.log(y > z); //false : Javascript engine change the type of z to number and compares it
console.log(x <= y); //true
console.log(z >= x); //true ; converts the string to number
console.log(x == z) ; //false ;
*/

//playing with null and undefined

console.log(null > 1 ); //false : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='
console.log(null > 0 ); //false : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='
console.log(null < 1 ); //true : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='
console.log(null > 0 ); //false : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='
console.log(null >= 0 ); //true : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='
console.log(null <= 0 ); //true : null becomes zero if we check them with any number With '>' , '<' , '>=' , '<='

console.log(null == 0 ); //false : if we compare it with equality comparison then it null will null

console.log("undefined ones");
// ** if we compare anything undefined it will give false. exception null == undefined is true
console.log(undefined > 1 );//false
console.log(undefined < 1);//false
console.log(undefined >=0) ; //false
console.log(undefined <= 0) ; //false
console.log(undefined >= 1) ; //false
console.log(undefined === 1) ; //false
console.log(undefined === null) ; //false
console.log(undefined == null); //true : exception



