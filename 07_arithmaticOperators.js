//basic arithmatic operations 
/* 
let x = 10 ;
let y = 2 ;

console.log(x + y) ; // 12
console.log(x - y) ; //8
console.log(x * y) ; //20
console.log(x / y) ; //5
console.log(x % y) ; //0
console.log(x ** y) ; //100
*/

//Behavior changes when try to make arithmatic operation between numbers and string
/*let x = 10 ;
let y = "2" ;

console.log(x + y) ; //102 : changing x to string and concatenating two string
console.log(x - y) ; //8 :changing y to number
console.log(x * y) ; //20 :changing y to number
console.log(x / y) ; //5 :changing y to number
console.log(x % y) ; //0 :changing y to number
console.log(x ** y) ; //100 :changing y to number
*/

//behavior changes when try to make arithmatic operation between two string-number. watch the below examples

/*
let x = "2" ;
let y = "2" ;

console.log(x + y) ; //22 : changing x and y to string and concatenating two string
console.log(x - y) ; //0 :changingx and y to number
console.log(x * y) ; //4 :changing x and y to number
console.log(x / y) ; //1 :changing x and y to number
console.log(x % y) ; //0 :changing x and y to number
console.log(x ** y) ;//4 :changing x and y to number
*/
//behavior changes when try to make arithmatic operation between two string. watch the below examples
let x = "apple" ;
let y = "mango" ;

console.log(x + y) ; //applemango
console.log(x - y) ; //NaN
console.log(x * y) ; //NaN
console.log(x / y) ; //NaN
console.log(x % y) ; //NaN
console.log(x ** y) ;//NaN