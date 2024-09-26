//suppose we have more than 1 objects of similar type and we want to run a same method with more than one object

const obj1 = {
    userName: "Milan",
    age: 23 
}
const obj2 = {
    userName: "Subha",
    age: 29
}
const obj3 = {
    userName: "Kiran",
    age: 25 
}
//implicit binding: When we try to access a method of an object using . operator or [] square bracket operator then it is called implicit binding.
//explicit binding: When we try to bind a external function with the object and we try to access the properties of the object . Then it is call explicit binding.

function sayHello(degree , collegeName){
    console.log(this.userName + ` ${degree}   ${collegeName}`);
}


//arrow function won't serve the purpose because this behaves differently with arrow function
// let sayHello = (degree , collegeName)=>{
//     console.log(this.userName + ` ${degree}   ${collegeName}`);
// }
//call(the object we want to set as current object , then list of arguments to the function)
sayHello.call(obj1 , "BCA" , "UOM");
sayHello.call(obj2 , "BA" , "CPKC");

//apply(the object we want to set as current object , then array of arguments to the function)
sayHello.apply(obj3 , ["BCA" , "UOM"])

//bind returns a function
const sayHi = sayHello.bind(obj2 , "B.tech");
sayHi("MUJ");