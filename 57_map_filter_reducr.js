/**Map is a higher order function which takes another function as argument 
 * and applies to all of the array element. The function can take 3 arguments (value , index , original array)
*/
/**
let arr = [1,2,3,4,6,5];
let squredArray = arr.map((number , index , array)=>{
    return number ** 2 ;
});
//returns an another array based on the function you passed
console.log(squredArray);
 */


/**Filter is also an higher order function which takes a function as an argument 
 * and returns filtered array according to the function.
 */

let number = [3,5,6,9,2];
function filterArray(arr){
    let result = [];
    for(let num of arr){
        if(num >= 5){
            result.push(num);
        }
    }
    return result;
}
console.log(filterArray(number));

//filter does the same above operation

let result = number.filter((num)=> num >= 5);
console.log(result);

//reducer function

let reducerFunction = (addfunction , initialValue, arr)=>{
        let accumulator = initialValue ?? arr[0] ; 
        if(initialValue != undefined){
            for(let i = 0 ; i<arr.length ; i++){
                accumulator = addfunction(accumulator , arr[i]);
            }
        }
        else{
            for(let i = 1 ; i<arr.length ; i++){
                accumulator = addfunction(accumulator , arr[i]);
            }
        }
        return accumulator ;
}

 let reducerResult = reducerFunction((acc , initialValue)=> acc + initialValue , 0 , [1,2,3,4,5]);
 console.log(reducerResult);


 let reducerArray = [1,2,3,4,5,6];
let resultreduce =  reducerArray.reduce((prevValue , currValue)=> prevValue + currValue,10);
console.log(resultreduce);