//Computed properties allow us to dynamically add properties. It is usefull when we want to add properties from variable's value
const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want to know about the student- (name/age/city/state)")
const object = {
    name: "Milan",
    age: 23,
    city: "Contai",
    state: "West Bengal"
}

object[key] = object[key] || "not available"
console.log(object);