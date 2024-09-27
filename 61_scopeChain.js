/** Scope chain is a method which javascript uses to find a variable.
 * At first, the variable is searched in the current scope, then it moves to it's parent's lexical 
 * envrionment. It does the same until it finds the variable or until global scope. If it doesn't find in
 * the global scope then it throws a reference error.
 */

/**What is Lexical Enviroment:
 * Lexical environment is theoretical concept that refers to the environment,
 * in which the code executed.
 * The lexical environment consist of two things:
 * 1> variable environment
 * 2> it's parent lexical environment
 */

// let a = 4 ;
// function x(){
//     console.log({a});
//     let b = 5 ;
//     function y(){
//         console.log({b});
//         let c = 6 ;
//         function z(){
//             console.log({c});
//         }
//         z();
//     }
//     y();
// };
// x();


//let's see how d is found using step by step
let d = 4 ;//step 4 : then it got the result and log the d. if it is unable to find then it trows an error
let a = 2 ;
function x(){
    //step 3 : then it searches d in x's lexical enviroment and couldn't find it and moves to GEC
    console.log({a});
    let b = 5 ;
    function y(){
        //step 2 : then it searches d in it's parent lexical enviroment and couldn't find it and moves y's parent
        console.log({b});
        let c = 6 ;
        function z(){
            console.log({d});//step 1 : first it searches d in current scope and could not find it
        }
        z();
    }
    y();
};
x();
