const obj = {
    name: "Milan",
    age: 23 ,
    add: {
        city: "Contai",
        state: "West Bengal",
        landMark: {
            near: "BAHS"
        }
    }
}
function makeDeepCopy(source) {
    const result = {};

    const keyArray = Object.keys(source);
    for(let key of keyArray){
        if(typeof source[key] == 'object'){
            result[key] = makeDeepCopy(source[key]);
        }
        else{
            result[key] = source[key] ;
        }
    }
    return result ;
}

console.log(obj) ;
const copiedObj = makeDeepCopy(obj);
console.log(copiedObj) ;
copiedObj.add.city = 'kolkata';
console.log('original obj after change',obj);
console.log('copied obj after change', copiedObj);