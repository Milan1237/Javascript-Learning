let myname = "Milan";
let age = 23 ;
let hobby = "Coding";
//Concatenation is method to attach strings which is created using '+'
let message = "My name is " + myname + " and i am " + age + " years old " +  " and I love " + hobby ;
console.log(message);

//Template Literal is way to create sentence and `` is used to make sentence

let message2 = `my name is ${myname} and I am ${age} years old and I love ${hobby}`;
console.log(message2);

let message3 = `My name is ${myname}
and my age is ${age}
and I love ${hobby}`;
console.log(message3);