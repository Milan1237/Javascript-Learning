//type conversion

const x = "1";
const y = "2";
console.log(x + y); //3

//to number 
 console.log(Number(x) + Number(y)); //basically Number function acts as a number constructor which takes a string returns the value
 const a = "one";
 console.log(Number(a)); //NaN : because a variable doesn't have number string
 
 // to string
 let num1 = 1 ;
 console.log(typeof num1);
 num1 = String(num1);// that is how we change the data type of the num1 variable from number to string
 console.log(typeof num1);

 //to boolean
  // if a string is empty then Boolean function will return false else if the Boolean function will return true ;
let string1 = "";
let string2 = "milan"; 
console.log(Boolean(string1));//false 
console.log(Boolean(string2));//true
    // any number either negative or positive will return true expect 0

let a1 = 0 ; 
let a2 = -1 ;
let a3 = 3 ;
console.log(Boolean(a1));  
console.log(Boolean(a2));  
console.log(Boolean(a3));  