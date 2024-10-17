const obj = {name: "Milan", surname: "Das" , age: 23 , city: "contai"};

function inverseKeyValue(obj){
    for(let key in obj){
        let tempValue = obj[key];
        delete obj[key];
        obj[tempValue] = key ;
    }
    return obj;
}

let result = inverseKeyValue(obj);
console.log(result);