/**Shorthand property: 
 * shorthand property in object simplifies the syntax when the name of the property and the variable you want to assign is same.
  */

let userName = "Milan";
let surname = "Das";
//traditional way to create and assign and object
let object = {
    userName: userName,
    surname : surname
}
console.log(object);
//using shortHand property:
//since the name of the variable we want assign and the key is same we can do the below operation
let object2 = {
    userName,
    surname
}
console.log(object2);

//example2 : using function
function createFunction(firstName , lastName){
    return {
        firstName,lastName
    }
}

let obj1 = createFunction("Milan" , "Das");
let obj2 = createFunction("Ashis" , "Das");
console.log(obj1);
console.log(obj2);

