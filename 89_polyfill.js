/**
 * What is polyfill :
 * Javascript is evoloving day by day. Some of the modern functionality is not supported by
 * the older browser. In order to run the web app smoothly we create polyfil.
 * In others words, polyfil is a piece of javascript which is written that enables modern functionality
 * on older browser.
 * 
 */

//map implementation

let arr = [1 ,2 , 3 ,4,5];



Array.prototype.myMap = function (callback){
    let tempArr = [];
    //we can use this because array is an object
    for(let i = 0 ; i < this.length ; i++){
        tempArr.push(callback(this[i]));
    }
    return tempArr ; 
}

const squaredArray = arr.myMap((num)=> num ** 2);
console.log(squaredArray);


// filter implementation

Array.prototype.myFilter = function (callback){
    let tempArr = [];
    for(let i = 0 ; i < this.length ; i++){
        if(callback.call(this , this[i] , i , this)){
            tempArr.push(this[i]);
        }
    }
    return tempArr ;
}

const filteredArray = arr.myFilter((value)=> value > 3);
console.log(filteredArray);

//reduce implementation

Array.prototype.myReduce = function (callback , initialValue){
    if(typeof callback != 'function'){
        throw new Error('callback is not a function');
    }
    if(!Array.isArray(this)){
        throw new Error('the object is not iterable');
    }
    let acc = initialValue ? initialValue : this[0] ;
    for(let i = initialValue ? 0 : 1 ; i < this.length ; i++){
        acc = callback.call(this , acc , this[i]);
    }
    return acc ;

}

const reduceResult = arr.myReduce((acc , curr)=>{return acc + curr} , 10);
console.log(reduceResult);


// Array.flat implementation

let array = [1,2,3,4,[5, 6] , [[7,8,9]]];

Array.prototype.myFlat = function (deapth = 1){
    let tempArr = [];
    function getFlatArray(arr , deapth){
        for(let i = 0 ; i < arr.length ; i++){
            if(Array.isArray(arr[i]) && deapth > 0){
                getFlatArray(arr[i] , deapth - 1) ;
            }else{
                tempArr.push(arr[i]);
            }
        }
    }
    getFlatArray(this , deapth);
    return tempArr ;
}

let flatArray = array.myFlat(Infinity);
console.log(flatArray);

//call implementation

let obj = {
    name: 'Milan',
    age: 23 
}

function showMessage(state , city){
    console.log(`the name of the user is ${this.name} and age is ${this.age} and city is ${city} and state is ${state}`)
}

Function.prototype.myCall = function (context , ...args){
    if (typeof this !== 'function') {
        throw new TypeError('myCall must be called on a function');
    }
        context.func = this ; 
        const result = context.func(...args);
        delete context.func ;
        return result ;
}

showMessage.myCall(obj , 'west bengal' , 'contai');

//apply implementation

Function.prototype.myApply = function (context , args){
    if (typeof this !== 'function') {
        throw new TypeError('myApply must be called on a function');
    }
    context.func = this ;
    const result = context.func(...args);
    delete context.func;
    return result ;
}

showMessage.myApply(obj , ['Maharastra' , 'Mumbai']);


//bind implementation

Function.prototype.myBind = function (context , ...args){
    if(typeof this != 'function'){
        throw new Error('got an error');
    }
    context.func = this ;
    return function (...rest){
        const result =  context.func(...args,...rest);
        delete context.func ; 
        return result ;
    }
}

const func = showMessage.myBind(obj, 'Italy');
func('Milan')