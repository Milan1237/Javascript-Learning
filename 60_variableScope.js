/**Accessability of variable is known as Scope
 * there are three types of scopes:
 * a> Global Scope.
 * b> Local Scope.
 * c> Block Scope
 */

//those variable which are not inside any block or function is called global scope
// var x = 3 ;
// function global(){
//     console.log(x);
// }
// console.log("The value of x is ",x);
// global();

//those variable which are inside a function is known as local scope

function sum(){
    var a = 5 ; 
    let b = 3;
    console.log(a);
}
sum();
//console.log(b);//throw an reference error

//variable inside a block {} is called as block level variable

if(true){
    let a = 5 ; 
    var b = 5;
}
// console.log(a);// a can not be accessible.


//some execeptions

// 1> if a var is declared in a block then it becomes a global variable
if(true){
    var demoVar = 4;//var become global variable
}
console.log(demoVar);

// 1.a > but if we declare var inside an function then it is a local scope only
function demoFunc1(){
    var demoVar2 = 3;
}
// console.log(demoVar2);//reference error

// 2> if let and const are writen outside a function and block then it's scope become script which is accessible globally
let x = 5 ; //see the sources in browser

