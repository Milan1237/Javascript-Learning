//Object creation Via object literal{}

// ** object's key is converted to string internally
let personDetails = {
    name: "Milan",
    education: 12,
    address: {
        city: "Contai",
        country: "India",
        pin:721433,
        'block name': 'Ramnagar' // if a key has more than one word then it should be under double or single qoute
    }
}


//##accessing a object 

//dot(.) notation
// console.log(personDetails.education);
// console.log(personDetails.address.city);

//Square bracket accsing([])
//* only square bracket approach can access those key which has more than one value
// console.log(personDetails[`address`]['block name']);


//## Adding and modyfyng an object
// const object1 = {
//     sleep: true ,
//     hour: 8 
// }
// console.log(object1);
// object1.sleep = false ;
// object1.sleepingTime = "12:00";
// console.log(object1);

//#Deleting a property of an object
// let object2 = {
//     value: "none",
//     sleep: false
// }
// console.log(object2);
// delete object2.sleep;
// console.log(object2);

//making a deep copy of an object
let object1 = {
    name: "milan",
    surname: "das"
}
let object2 = {...object1};
console.log(object1);
console.log(object2);
object2.name = "Subha";
console.log("after update");
console.log(object1);
console.log(object2);