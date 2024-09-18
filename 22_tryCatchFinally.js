// If there is an error found while executing the code javascript stops the execution of the code where an error occured. This might affect the usage of a website
 /*let x = 0 ;
console.log(y); //javascript execution will be stopped here due to a reference error
console.log(x); */

let x = 0 ;
try{
    //try block will be executed until a error found
    console.log(y);
}catch(error){
    //when an error occured catch block gets activated with a parameter of the error of try block
    console.log(x);
    console.log("error occured");
}finally{
    //finally block will be executed in any cases for sure
    console.log("Execution done");
}