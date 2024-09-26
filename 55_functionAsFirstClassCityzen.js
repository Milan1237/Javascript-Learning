/**In a language, function is said to first class cityzen when a function
 * can be assigned to a variable , function can be used as argument to other function and function can be returned by another function
 */

//01:
// let greetMessage = ()=>{
//     console.log("Hello World");
// }
// greetMessage();


//02: function passed as an argument
// let greetMessage = (argFunction)=>{
//     let message = argFunction();
//     console.log("Milan ," , message);
// }
// function argFunction(){
//     return "Welcome to East Medinipur";
// }
// greetMessage(argFunction);

//03 : function returned by another function

let function1 = ()=>{
    function innerFunction(){
        console.log("Hello Milan this is inner Function");
    }
    return innerFunction ;
}

// let returnedFunction = function1();
// returnedFunction();

//We can also do the above operation with the same below
function1()();