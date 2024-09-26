//constructor is basically a like a regular function but it is differnt in:
// according to the developers, the name of the function should shirt with a capital letter,
//and the function should be used with new object

//  function UserConstructor(name , userAge ){
//     this.userName = name ,
//     this.userAge = userAge
// }

// what if the constructor is an arrow function
//** It is not possible to make an constructor with arrow function */
// let UserConstructor = (name , userAge)=>{
//     this.userName = name , 
//     this.userAge = userAge
// }



let obj1 = new UserConstructor("Milan", 23);
let obj2 =new UserConstructor("Ashis" , 56);
let obj3 =new UserConstructor("Kiran" , 60);
let obj4 =new UserConstructor("Jhinuk" , 56);

console.log(obj1.userName);
console.log(obj2);
console.log(obj3);
console.log(obj4);
    