/** Spread operator (...) in javascript is used unpack an array or object.  */
/** let see the usage of spread operator */
//###use case 1
let array = [1 , 2 ,3 ,4,5];
let array2 = [6,7,8,9];
let arr3 = [...array , ...array2];//[1,2,3,4,5,6,7,8,9]merging two arrays
let arr4 = [...array , 'a' , 'b' , ...array2 , 'c' , 'd'];//[1, 2, 3, 4, 5, 'a' , 'b', 6, 7, 8, 9, 'c','d'] merging and adding multiple values at multiple position of an array

//Use case 2 : using with object

let object = {userName : "milan", userAge : 23};
let object2 = {...object}; //assigning object properties to object2 properties
let object3 = {...object , userName: "Subha"}; //assiging as well as changing
let object4 = {...object , ocupation: "Software Engineer"}; // assiging as well as adding another property to a object


//use case 3 
let numArray = [1,2,10,10,8];
let max = Math.max(numArray);
console.log(max);//Nan : math object can no work with arrays
max = Math.max(...numArray);
console.log(max);

//spread with string
let string = 'abcdefg';
let arrayFromString = [...string];
console.log(arrayFromString);