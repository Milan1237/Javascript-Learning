//count how many times a charector occured in an array
let arr = [
    "a","b","c","d",
    "a" , "e" , "b" , 
    "c" , "d" , "e",
    "f","b", "k","e"
]

let result = arr.reduce((acc,curr)=> curr in acc ? {...acc , [curr]: acc[curr] + 1 } : {...acc , [curr]:1},{});
console.log(result);
