/* 
Hoisting is a process whereby you can access a variable before initialization. 
*/
console.log(result) ; //undefined : because of context execution we can access the variable which initialized to undefined
var result = 99 ;

 //you have got 99 : because of context execution we can access the whole function 
// fun();//fun is not a function : here we can not access the fun function because it is first assigned a value as undefined by context execution's create process. But we can access this function after initialization.
var fun = function showResult(){//here we can not access the full function before initialization. we can only access the variable fun which value is undefined because of context execution 
    console.log(`you have got 99`);
}
showResult();
function showResult(){
    console.log(`you have got 90`);
    fun();

}