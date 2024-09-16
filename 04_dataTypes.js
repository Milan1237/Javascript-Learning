// There are 7 types of premitive data type in javascript
    // a. number ; b. string ; c. boolean ; d. undefinded ; e. null ; f. bigint g. symbol
//and object is a non premitive data type and array is a type of object

// string
let str = "this is a string"
let numString= "78"
console.log(typeof numString)
        // Javascript assumes everything as string that is under double quote or single quote
// Number
let num1 = 12 ;
let num = 2.5;
console.log(typeof num);
        // Javascript assumes all the integer and float value as number

// bolean
let isPossible = true;
let isFeasible = true;
let isPractical = true;
console.log(typeof isFeasible)
    // all the true and false value is a data type of boolean value

// Undefined
    // If any value is not given to a variable then the declared variable holds the value of undefined
    let Undefined ;
    console.log(typeof Undefined);

// Null
    // Null is a object
let noValue = null; 
console.log(typeof noValue);

// Bigint 
    // If a number is bigger than (2^53 - 1) then the data type of the value is considerd as bigint
    // to declare a number as bigint we have suffix n after that number

 let bigNumber = 102586478954865878n;
 let number = 123n;
 console.log(typeof number);

// Object

    let object = {
        name: "milan",
        maritalStatus: false,
        age: 23,
        objectInsideObject:{
            fatherName: "Ajit Das",
            motherName: "Bandana Das",
            coLiving: true
        }
    }
    console.log(typeof object);

