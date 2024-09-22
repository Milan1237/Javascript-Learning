//Array is an immutable object unlike string. we can modify the it

//push
/* 
let fruits = ["mango" , "orrange" , "kiwi" , "berries"];
console.log(fruits);
fruits.push("nuts");//push method push one or more than one items at the end of the array
fruits.push("apple","sugar", "candy");
console.log(fruits); 
*/

//concat

let arr1 = [1 , 2 , 3];
let arr2 = [4, 5 ,6];
let arr3 = [7,8,9];

let arr4 = arr1.concat(arr2 , arr3);//concat two or more than two array into one and returns a new array without changing the value of the existing array
console.log(arr4);