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