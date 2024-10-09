/**
 * Content:
 * What is prototype?
 * prototypal chaining
 * same Method
 * value of this
 * for in vs object.keys
 * 
 */

//every javascript object has hidden properties that is called prototype

let user = {
    name: "Milan",
    role: "Software Engineer"
}
console.log(user); // we can see in the console that there is a hidden property called as prototype
//accesing prototypes
console.log(user.toString());// see even if we have not have property called as toString() we can access it from it's prototype
//the js engine first searches the property in the user. If it doesn't find the property in the object then only it searches from it's protype. if not found then it returns undefined


// making custom prototype

let guitar = {
    strings: true ,
    stringsType: 'Nylon',
    showMessage: function (){
        console.log(this.stringsType);
    }
};
let spanishGuitar = {
    stringsNumber: 6 ,
    stringsType: 'Metal',
    __proto__: guitar, //giving custom prototype to spanishGuitar object 
}

//accesing prototype from spanish guitar object :
console.log(spanishGuitar.strings) ; 
console.log(spanishGuitar.stringsType) ; //because the propety is found in the spanish guitar itself

//value of this in the prototype
spanishGuitar.showMessage();// this will reffered to the object which is used to call the prototypal function


//Object.keys are only use to get a ceratain object keys only
console.log(Object.keys(spanishGuitar));

//for in loop is used get all the keys of a certain object and keys of a all custom prototype
for(let keys in spanishGuitar){
    console.log(keys);
}
