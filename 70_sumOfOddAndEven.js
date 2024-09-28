//given an array , write a function that returns sum of odd and even value

let sumofOddandEven = (array)=>{
    let odd = 0 ;
    let even = 0 ;
    for(let value of array){
        value % 2 ==0 ? even+=value : odd+=value;
    }
    return {odd , even};
}

console.log(sumofOddandEven([1,2,3,4,5,6,7,8,9,10]));


//doing the same with reduce
let arr = [3,2,4,5,6,7,8];

let result = arr.reduce((acc , curr)=>curr % 2 === 0 ? {...acc , even: acc.even + curr} : {...acc , odd: acc.odd + curr},{odd: 0 , even: 0})
console.log(result);