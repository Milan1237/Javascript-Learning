//pop(); deletes the last value of an array and returns  the array length after pop(). and it changes the original array
/* 
let skills = ["html", "css" , "javascript" , "reactJs"];
let deletedValue = skills.pop();//deletes the last value and returns the last value
console.log(`the deleted string in the array is${deletedValue}`);
console.log(skills);
let emptyArray = [];
console.log(emptyArray.pop()); //returns undefined as there are no value to be deleted
*/


// slice : slice method returns a new array from a existing array based on the arguments passed by the programmer
// ** it does not change the original array
let array = [1, 2 , 3 , 4];
let newArray = array.slice(0); 
console.log(newArray); //it basically returns the whole array as the end index is not present

let newArray2 = array.slice(-1 ,  3); // returns a empty array ** starting value can not be negative 
console.log(newArray2);

let newArray3 = array.slice(1 , 3); //returns [2,3]
console.log(newArray3);

let newArray4 = array.slice(1 , 6); //returns [2,3,4]
console.log(newArray4);


// splice : splice method is similar to slice method with some differences

let arr1 = [1,2,3,4,5,6,7,8];
