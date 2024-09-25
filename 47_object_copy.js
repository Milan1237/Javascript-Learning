//Generally, when Objects are copied then the reference of the object is copied. 
/**
let details1 = {
    empName: "Ajit Kumar Das",
    job: "Cook",
    age: 48,
}
const details2 = details1;
//now if I change the one value then both details1 and details2's propeties will be changed
details1.age = 34;
console.log(details1);
console.log(details2);

 */
/**Basically the two objects are pointing towards the same memory block. That is why if we change one value then other value is also seems to change this is called shallow copy */


//{...} spread operator
//spread operator also does shallow copy. It is useful when an object do not have nested object
//then it does deep copy
/**
let user1 = {
    userName : "Milan",
    age: 23
}
let user2 = {...user1};
user2.age = 23;
user1.userName = "Subha";
console.log(user1);
console.log(user2);
 */
//## so we can see that if an object doesnot have nested object then it does deep copy
/**
let profile1 = {
    userName: "Milan",
    age: 23,
    address: {
        city: "Contai",
        state: "West Bengal"
    }
}
let profile2 = profile1;
profile1.address.city = "Ramnagar";//both two object's city name will be changed
console.log(profile1);
console.log(profile2);
 */


// copying using Object.assing Object using json
//**works same as spread operator does while copying an object
/**
let user1 = {
    userName : "Milan",
    age: 23
}
let user2 = Object.assign({} , user1);
user2.age = 25;
user1.userName = "Subha";
console.log(user1);
console.log(user2);
  */
//## so we can see that if an object doesnot have nested object then it does deep copy
/**
let profile1 = {
    userName: "Milan",
    age: 23,
    address: {
        city: "Contai",
        state: "West Bengal"
    }
}
let profile2 = Object.assign({}, profile1);
profile1.address.city = "Ramnagar";//both two object's city name will be changed
console.log(profile1);
console.log(profile2);
  */



//deep copy using JSON
/** 
let profile1 = {
    userName: "Milan",
    age: 23,
    address: {
        city: "Contai",
        state: "West Bengal"
    }
}

let profile2 = JSON.parse(JSON.stringify(profile1));
profile1.age = 24;
profile2.address.city = "Mumbai";
console.log(profile1);
console.log(profile2);

*/

//deep copy using custom function

function deepCopy(obj){
    if(obj === null || typeof(obj) !== "object" ){
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {} ;
    
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;

}

let profile1 = {
    userName: "Milan",
    age: 23,
    address: {
        city: "Contai",
        state: "West Bengal"
    }
}
let profile2 = deepCopy(profile1);
profile1.address.city = "Kolkata";
profile2.address.state = "Hariyana";
console.log(profile1);
console.log(profile2);
