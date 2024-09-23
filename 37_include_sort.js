// include:
// include method takes the value to be searched and a optional second parameter which takes the starting value from where search will be start
/* 
let array1 = ['html' , 'css' , 'javascript' , 'reactJs', 'angular','vue'];
let courseAvailable = array1.includes('nodejs');
courseAvailable ? console.log("course is available") : console.log("course is not available");
*/
//sort :
//sort method sort an array using utf-16 code. but if an callback is given to sort function then it's sort the array according to the function

// let array2 = ['berries' , 'apple' , 'banana' , 'cherries'];
// console.log(array2);
// array2.sort();//sorts the array according to it's ascii value
// console.log(array2);

let numbers = [2, 11 , 4 , 7, 9, 22 , 33, 109];
console.log(numbers);
numbers.sort();//converts the number to string and sorts the number according to it's ascii value
console.log(numbers);
//now we sort the array using a callback function
function ascendingOrder(a, b){
    return a - b;
}
numbers.sort(ascendingOrder);//it compares two value at a time . if the difference comes in negative it doesn't do any thing but if the difference come in positive then only it swap the value 
console.log(numbers);


function descendingOrder(a, b){
    return b - a;
}
numbers.sort(descendingOrder);
console.log(numbers);