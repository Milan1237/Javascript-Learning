/**
 * asynchronus nature of javascript
 * 
 */

// -> What is javascript ? and How can we achive asynchronus nature ?
// javascript is single threaded, synchronus, non blocking language . Which means javascript can only be executed one task at a time and it is non blocking.
//The question arrises that how do we achieve asynchronus nature of javascript.
//Js engine only have call stack and heap. Then how do we perform other functionality like setTimeout , fetch , getting location etc . These things are achived by web APIs provided by browser;


//-> What is event loop ? 
//Event loop has a very simple functionality. It monitizes call stack and callback queue only. And when it finds call stack empty then it checks the Microtask queue and task queue and puts the function to call stack to execute.




// console.log(`let's begin the code execution`); // step 1 : this code is executed 
// const container = document.getElementById('button'); //step 2//web api helps to get the node of the document
// console.log(container);
// //then the below code is stored in the call back queue . and when it is clicked then the callback function is executed
// container.addEventListener('click' , ()=>{
//     console.log('button clicked'); //step 4
// })

// console.log(`let's finish the code execution`);//step 3


console.log(`let's start`);
function a (){
      return new Promise(function making(resolve , reject){
        console.log('executing promise');
        setTimeout(function makingPromise(){
            resolve('done');
        } , 4000);
    });
}
a().then((res)=>console.log(res));
console.log('end');

//watch the example with javascript visualizer