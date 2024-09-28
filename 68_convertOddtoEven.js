/**
 * given an array convert all the even number to odd and odd number to add
 */
function convertOddtoEven(arr){
    // let result = [];
    // for(let i = 0 ; i < arr.length ; i++){
    //     arr[i] % 2 ==0 ? result[i] = arr[i]+1 : result[i]= arr[i] - 1;
    // }
    // return result ;

    let result = arr.map(value=> value % 2 == 0 ? value+1 : value-1)
    return result;
}
console.log(convertOddtoEven([1,2,3,4,5,6,7,8,9]));