/** 
 * A closure is a function which remebers variable from where it is defined , even after the place is no longer accessible.
 */

/** 
let outer = 30 ; 
function x(){
    let a = 4 ; 
    let b = 3 ; 
    return function y (){
        console.log({a , b});
        console.log(outer);
        return function z (){
            console.log({a});
            console.log({b});
        }
    }
}
let innerFunction = x()();//now innerFunction is accessing z function
innerFunction();// now you can see that y can access outer variable
*/

//some caviats of closure

/** 
let outer = 30 ; 
function x(){
    let a = 4 ; 
    let b = 3 ; 
    let c = 10 ;
    return function y (){
        console.log({a , b });//undefined , b = 3
        var a ;
        // let c = 1 ;
    }
}
let innerFunction = x();//now innerFunction is accessing z function
innerFunction();// now you can see that y can access outer variable
*/

function outerFunction(){
    let arr = [];
    for(let i = 0 ; i<3 ; i++){
        arr.push(function innerFunction(){
            console.log(i);
        })
    }
    return arr ;
}

let func = outerFunction();
func[0]();
func[1]();
func[2]();