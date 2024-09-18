// Short Circuting
// Falsy : null , "" , 0 , undefined is all a falsy value
// Truthy: all the values except above falsy values are called truthy

// playing with || : || operator will check first truthy value from left to right and return the first truthy value. If there are no truthy value in whole statement then it returns the last value
/* 
let firstName = "";
let lastName = "bhai";
// case 1
let userName = firstName || lastName;
// console.log(userName);
// case 2 : when all are false
console.log(null || 0 || undefined); //undefined
// case 3 
console.log("" || null || "Milan"); //Milan
*/

// playing with && operator : && operator will find the first falsy value and return it . if there is no falsy value then it will return the last falsy value

// case 1
console.log(1 && 0) ; //0

// case 2
console.log(null && 0 && "Milan"); //null

// case 3 : when all the values in the expression are false
console.log(3 && "short" && "Long");
