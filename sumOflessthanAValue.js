//sum of values which are less than 40

let arr = [12, 34, 50 , 60 , 12 , 3];

let result = arr.reduce((acc,curr)=>curr < 40 ? acc+curr : acc  , 0);
console.log(result);