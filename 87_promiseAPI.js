/**
 * Contents: 
 * what is promise.all() api
 * syntax
 * pros and cons of promise api
 * what is promise.allSettled
 */

// Promise.all([arrayOfPromises]) - Promise.all takes an array of promises and returns a single promise 
// that resolves when **all** promises in the array have resolved, or rejects if any promise rejects.

const promise1 = new Promise((resolve)=>{setTimeout(()=> resolve('resolved promise1') , 1000)});
const promise2 = new Promise((resolve)=>{setTimeout(()=> resolve('resolved promise2') , 2000)});
const promise3 = new Promise((resolve , reject)=>{setTimeout(()=> reject('reject promise3') , 0)});
const promise4 = new Promise((resolve , reject)=>{setTimeout(()=> reject('reject promise4') , 1000)});

// const promise = Promise.all([promise1 , promise2 , promise3 , promise4]); //returns an promise when all the promise is settled
// promise.then((response)=> console.log(response)) //if all the promise is resolved then it will return an array of result
// .catch((error)=> console.log(error)); //the first error or rejected value will be catched by .catch method

// pros: Instead of using .then on all promises we can use one .then or .catch to get the all the value
//cons: 1> failure of getting all other promises data if 1 promise is rejected


//practical example

// const user1 = fetch(`https://jsonplaceholder.typicode.com/todos/1`);
// const user2 = fetch('https://jsonplaceholder.typicode.com/todos/2');

// const twoUser = Promise.all([user1 , user2])
// .then((response)=> {
//     // return response.map((res)=> res.json()); // it will return an array of promise immediately even before converting it into json
//     // return response[0].json();
//     return Promise.all(response.map((res) => res.json())); //right approach as it will return the converted response to json
//     // return response ;
// })
// .then((data)=> {
//     // data.forEach((dat)=> console.log(dat))
//     console.log(data);
// });



//->promise.allSettled :
//promise.allSettled() waits for all the promises to be settled. Unlike promise.all() where if one value is rejected then only the rejected value is returned

const promiseAllsettled = Promise.allSettled([promise1 , promise2 , promise3 , promise4]);
promiseAllsettled.then((value)=> console.log(value));



//promise.race(); 
//returns the first settled value wheather rejected or resolved
const promiseRace = Promise.race([promise1 , promise2 , promise3 , promise4]) ;
promiseRace.then((prom)=> console.log(prom))
.catch((error)=> console.log(error));

//promise.any()
//returns the first fullfiled value only resolved one
const promiseAny = Promise.any([promise1 , promise2 , promise3 , promise4]) ;
promiseAny.then((value)=>{
    console.log(value);
})
