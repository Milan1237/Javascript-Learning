//Pure function: A function should alaways be a pure function. A function which takes parameter, does not change value or type of the parameter, and return a value is called as pure function

// write a function which gives a range of number and find the sum of all the digit between them
/*
function summation(min , max){
    let sum = 0 ;
    for(let i = min ; i<=max ; i++){
        sum += i;
    }
    console.log(sum);
}

summation(1 , 100);
*/
// Anonymous Function : A function without a name. 
/* 
// anonymousFunction("Milan"); // we can't call it before intialization like normal function
let anonymousFunction = function (userName){ //when we assign a function to a variable then the expression is anonymous Function
    console.log(`Welcome to India ${userName}`);
}

anonymousFunction("Milan");
*/
// Named Function Expression: is basically like anonymous function but we provide a name to it . but we can not call it by that name globally. We can call it inside the function only

let func = function namedFunction(){
    console.log("This is named funciton");
    console.log(typeof namedFunction);
}
func();
// namedFunction();//we can not call it because the namedFucntion name is available inside the funciton only

// IIFE : Immediately Invoked Function Expression

(function (){
console.log("this is an example of IIFE")
})();