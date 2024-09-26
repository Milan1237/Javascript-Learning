/**A pure function has this charecteristics:
 * 1> A function should always take an arguments.
 * 2> A function should not change the input.
 * 3> A function should not depend on the external variable. Neither it changes external source.
 * 4> A function should always give same output when it given a same input.
 * 5> A function should return a value
 */

//Some example of pure function

let pureFunction1 = (value)=>{
    return value * 2 ;
}//this function doesn't change the input neither it is depending on external value. So, it is a pure function
let doubledValue = pureFunction1(5);
console.log(doubledValue);

//Some example impure function
let x = 5;
let impureFunction1 = (value)=>{
    return value * x ; //this is a impure function since it depends on an external source
}
let y = impureFunction1(6);
console.log(y);