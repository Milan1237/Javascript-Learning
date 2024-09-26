/**A function is said to be a higher order function if a function take a function as an arguments or 
 * return a function.
 */

//01: 

// function innerFunction(){
//     console.log("This is an inner function");
// }
// function outerFunction(inner){
//     inner();
//     //basically this outerFunction becomes an higher order function since it is taking a function arguments
// }
// outerFunction(innerFunction);

// 02

// function outer(){
//     return function inner(){
//         console.log("this is an inner function");
//     }
//     // Now this funciton is also called an higher order Function since it is returning a function

// }
// let result = outer();
// result();

//03 : usage

// let array = [1, 2 , 3 , 4 , 5];

// function calculatePower(array,powerFunction,power){
//     let calculatedArray = [];
//     for(let number of array){
//         calculatedArray.push(powerFunction(number,power))
//     }
//     return calculatedArray;
// }
// function powerFunction(number , power){
//     return number ** power;
// }
// let result = calculatePower(array , powerFunction , 4);
// console.log(result);

