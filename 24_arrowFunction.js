// arrow function is a short hand method of normal funtion. let see what are the differences or capabilities of an arrow function


// basic syntax 

/*
// let sum = func1(12 , 15); // we can't access it before initialization

let func1 = (num1 , num2) => {
    const sum = num1 > num2 ? num1- num2 : num1 + num2;
    return sum;
}

// let sum = func1(12 , 15);
// console.log(sum);

*/





// if the function takes only one parameter we can also remove the `()` also

/* 
let func2 = char => {
    const vowel = "aeiou";
    return  vowel.includes(char) ? true : false ;
}

let value = func2('a');
console.log(value);
*/

// We can also remove the curly braces
/* 
let func3 = (x , y) => x > y ? x-y : x+y;
let value = func3 (12 , 15);
console.log(value);

*/

let arr = [1 , 2 , 3];
console.log(arr);