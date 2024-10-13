/**
 * async function is a syntactic sugar over .catch and .then . It return an promise
 */
async function fun(params) {
    return 5 ; //async function always returns a promise
}
let res = fun() ; 
console.log(res);

async function getData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log('error occured:' ,  error)
    }
}

getData();