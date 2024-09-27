/**All the function except arrow function has arguments object.
 * The argument we give to a function it is stored in array like object
 * which is called argument object.
 */

function sum (a , b , c){
    console.log(arguments);
    //we can perform length method to know the length of the argument object
    console.log(arguments.length);
    // we can access and change the value using it's index
    console.log(arguments[2]);
    arguments[2] = 10 ;
    console.log(arguments);
    //but we can't perform other object or array operation like map , filter, reduce etc. in order to these operation we need convert it to an array
    let argumentArray = [...arguments];
    let filteredArgumentArray = argumentArray.filter((value)=> value > 2);
    console.log(filteredArgumentArray);
    console.log(a, b , c);
    a = 7 ; 
    console.log(arguments);
}

sum(1,2,3,4,5);

//now we will see behaiviour if there is default value.

function subtraction(a = 10, b){
console.log(a);// 8 
console.log(arguments);
arguments[0] = 50 ;
arguments[1] = 100;
console.log(a);// the value a does not change if there is default value
console.log(b);//doesn't changes as a has default value
a = 200 ;
console.log(arguments);
//so we can conclude that if any parameter of a regular function has a default value then 
//if we change the arguments value it won't effect the parameters variables neither the changes in parameter variable
//changes the argument object
}
subtraction(8 , 10 , 20);