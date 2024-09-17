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
