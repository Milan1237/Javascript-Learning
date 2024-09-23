// We can see in the below example that if we change anything in copied array the original array is also changing
//it is because when we copy array via assignment(=) operator then the same array address is pointed by two variables
//that is why whenever we change the value of copied array then original array value is also changed.
//this also called shallow copy where both variable points to the same array.
/**
let arr1 = [1 , 2 , 3];
let arr2 = arr1;
console.log('arr1 -', arr1);
console.log('arr2 -', arr2);
arr2.push(4);
console.log('updated arr1 -', arr1);
console.log('updated arr2 -', arr2);
 */

/**Solution 1: spread operator */

/**
let arr3 = [1 , 2 , 3];
let arr4 = [...arr3];
console.log('arr3 -', arr3);
console.log('arr4 -', arr4);
arr4.push(4);
console.log('updated arr3 -', arr3);
console.log('updated arr4 -', arr4);
 */

/**Solution 2: for loop */

let arr5 = [1 , 2 , 3];
let arr6 = [];
for(let val of arr5){
    arr6.push(val);
}
arr6.push(4);
console.log('updated arr5 -', arr5);
console.log('updated arr6 -', arr6);


/**We can also use Array.from() , concat method to make deep copy of a file */