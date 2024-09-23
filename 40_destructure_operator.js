//destructure operator is used to unpack array and object and assign the value or properties into a distinct variable

//example1
let array = ["html" , "css" , "javascript" , [1 , 2 ,3]];
const [lang1 , lang2 , lang3 , ...restValue] = array ; //the elements of array is assigned to distinct variable 
// console.log(lang1);//html
// console.log(lang2);//css
// console.log(lang3);//javascript
// console.log(restValue);//[[1,2,3]];

//example 2 : some values can be skipped thus we will only take the required data from an object or array
let peopleName = ['milan' , 'subha' , 'joya' , 'ishita' , 'ritika'];
let [husband , ,  wife] = peopleName ; //one `,` skips one element
// console.log(`name of the husband is ${husband} and name of the wife is ${wife}`) ;

//example 3 :suppose we want the first n number of data and other data at end we want to store it in an array 
let numbers = [1 , 2 ,3 ,4 ,5];
let [need , ...needArray] = numbers;
// console.log(numbers);
// console.log(need);

//example 4: Swapping value
let a = 5 ;
let b = 4;
[a , b] = [b , a]; //a is set to b and b is set to a;
console.log(`value a: ${a} and value b: ${b} `);

//example 5 : let's start playing with object
/**
let object = {userName: "Milan" , age :23};
let {userName , age} = object; //unpacking object's property and assiging it different variable
console.log(userName);
console.log(age);
 */


//example 6 : we can rename properties name and use it
let employee = {userName: "Milan Das", rollNumber: 1 };
let{userName:empName , rollNumber:empCode} = employee;
console.log(`The name of the empoyee is ${empName} and his empcode is ${empCode}`);


//example 7: let's see how we destructure a nesting object
let nestObject = {scallability: true , payment : 100 ,data: {dataName: "mongoDB" , subject: "DBMS"}};
let {payment , scallability ,  data :{dataName , subject}} = nestObject;

console.log(`scalability:${scallability} , payment${payment} , data : ${dataName }`);