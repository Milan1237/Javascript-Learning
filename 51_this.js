/**This keyword typically refers to the object that is executing the function */
//example: 1

/**
let userInfo = {
    userName:"Milan",
    userAge: 23,
    sayHello: function (){
        console.log(`Welcome ${this.userName}`);//this refers to userInfo object
    }
}
userInfo.sayHello();
*/

/**This keyword works little differnt in arrow function.
 * this is inherited in arrow function from it's sorrounding scope
 */

//example: 2

/**
let userInfo2 = {
    userName:"Milan",
    userAge: 23,
    sayHello:  ()=>{
        // console.log(`Welcome ${this.userName}`);//prints nothing as 'this' behaves differently with arrow function
        console.log(this);//this is refering to the window object
        
    }
}
userInfo2.sayHello();
 */

//example 3 

/**
let userInfo3 = {
    userName:"Milan",
    userAge: 23,
    sayHello:function  (){
        let sayhi = ()=>{
            console.log(this);//this 'this' here is refering to the object because this arrow function's this is inherited from it's sorroundin which is sayHello function.
        }
        sayhi();
    }
}
userInfo3.sayHello();
 */

//example 4:
// in nested function this can refer to the global object

let userInfo4 = {
    userName:"Milan",
    userAge: 23,
    sayHello:function  (){
        function sayhi (){
            console.log(this);//here this 'this' is refering to the global object because it is not direct property of the userInfo4 object
        }
        sayhi();
    }
}
userInfo4.sayHello();











/** #key takeaways
 * a. in methods this refers to the object that executes the method
 * b. in regular function this refers to the global object that is window
 * c. 'this' in arrow function is inherited from it's global sorroundings
 * d. in nested function this can refer to the global object
 * 
 */