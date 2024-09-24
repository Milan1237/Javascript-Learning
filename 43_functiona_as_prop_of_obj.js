//Creating function inside an object
const object1 = {
    name: "Milan",
    //we create a key assign it a anonymous function then internally function name becomes the key
    greetMessage: function (){
        console.log(`Welcome ${this.name}`);
    },
    //We create do not create a key but create a named function then internally the key name takes the function name
    bye(){
        console.log(`tata bye bye, have great journey ${this.name}`);
    }
}

//accesing a function
//dot notation:
object1.greetMessage();
object1.bye();
//square bracket notation
console.log(object1["greetMessage"] , "--"); //[Function: greetMessage] --
object1["greetMessage"]();//Welcome Milan

//function borrowing
const object2 ={
    name : "Subha"
}
object2.greetMessage = object1.greetMessage;

object2.greetMessage();
