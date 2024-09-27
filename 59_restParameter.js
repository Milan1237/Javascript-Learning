/**Rest parameter is similar to arugment object with subtle differences.
 * Rest parameter takes all the remaining parameters of a function and turns it into an array.
 * Rest Parameter should always be the last formal parameter.Unless it will return an syntax error
 */

function sumOfRemainingArray(a , b , ...remainingArray){
            let total = 0;
            for(let value of remainingArray){
                value > 0 ? total += value : total = total ;
            }
            return total ;
}

console.log(sumOfRemainingArray(2,3,-9,19,10,20,30,40, -100));