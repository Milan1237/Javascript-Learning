/**
 * Recursion is a programming technique where a function call itself to solve proble
 */
//Sum of an array
/**
 * let's say we have an array = [1,2,3,4,....n];
 * sum of an array = n + sum of(n-1)
 */

function sumOfAnArray(array , arraySize){
    if(arraySize == 1){
        return array[arraySize - 1];
    }
    return (sumOfAnArray(array ,arraySize-1) + array[arraySize -1]);
}

let array = [10,20 , 30 , 40];
let arraySum = sumOfAnArray(array , array.length);