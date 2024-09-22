// Array is of non primitive data type which is used to store differnt kind information all the data type and  we access the value of an array via it's index ;

let studentName = ["Milan" , "Dipak" , "Joya" , "Jaydev" , "Virat" , "Shreyan"];
console.log(typeof studentName); //object\

// Array iteration using traditional for loop
/* 
for(let i = 0 ; i < studentName.length ; i++){
    console.log(studentName[i]); //accesing via index
}
*/

//Array iteration using for-let-of
/* 
for(let name of studentName){
    console.log(name);//all the value of studentName will assigned to name one by one
}
   */
  

//Array iteration using for-let-in
/* 
for(let index in studentName){
    console.log(studentName[index]);
}
*/

//Array iteration using for-each
/* 
studentName.forEach(name =>{
    console.log(name);
});
*/

//Some array Methods

console.log(studentName);
// let removedStudentFromLast =studentName.pop() ; // deletes the last value returns the deleted value
// let removedStudentFromFirst = studentName.shift(); //removes the first element and returns it 
// let newArrayLength = studentName.push("Arun"); //adds new value to the end
// let student = studentName.splice(2 , 3);//starts removing the first argument value index remove end argument number value 


//map
// let newStudentNameArray = studentName.map(name => name.toUpperCase() ); // Creates a new array with the results of calling a function for every array element

//filter
// let newStudentNameArray = studentName.filter(name => name.length >= 5); // Creates a new array with the results of calling a function for every array element and filters it


// reduce
let numbers= [10 , 20 , 30]; 
let studentNumber = numbers.reduce( (givenValue,arrayvalue)=>{
    return givenValue + arrayvalue;
},7)// basically reduce somewhat use the value of the array and turns into one unit or value using a certain callback function



console.log(studentNumber);


