//writing a function which will return largest value of an array
let arr = [9 , 4, 5, 3, 8, 10];

let largestValue = (arr)=>{
    let j = 0;
    for(let i = 1 ; i < arr.length ; i++){
        arr[j] <= arr[i] ? j=i : j=j;
    }
    return arr[j];
}

const large = largestValue(arr);
console.log(large);
