/**
 * What is promise ?
 * custom promise creation
 * Method chaining
 */

//Promise is basically a special object which has state for asynchronus state and it's corresponding value .
// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>{
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
// })

let flag = true ; 
const db =[
    {id: 1 , name: "Milan" , roll: 21},
    {id: 2 , name: "Sunil" , roll: 1}
];

const customPromise = new Promise((resolve , reject)=>{
    if(flag){
        setTimeout((main)=>{resolve(db)} , 3000)
    }else{
        const error = new Error("Something has went wrong");
        reject(error);
    }
});

customPromise.then((response)=>{
    // throw new Error('this is an custom error'); // the catch function will take the error
    console.log(response);
}).catch((error)=>{
    console.log(error.message);
})


//Method chaining

const promise1 = new Promise((resolve , reject)=>{
    setTimeout(()=>{resolve({hey: 'this is milan'})} , 4000)
}) ;

promise1.then((response)=>{
    return  new Promise((resolve, reject)=> resolve({...response , name: "Milan"})) ;
})
.then((response)=>{
    return new Promise((resolve,reject)=> {
        // reject(new Error('something went very wrong'));
        resolve({...response , surname: 'Das'});
    })
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error.message);
})