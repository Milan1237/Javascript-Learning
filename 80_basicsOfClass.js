/**
 * classe
 */

class User {
    constructor(name , age , empId , education , salary){
        (this.name  = name),
        (this.age  = age),
        (this.empId  = empId),
        (this.education  = education),
        (this.salary  = salary)
    }
    //everything outised the constructor become the prototype of the object made using this class
    displayDetail(){
        console.log({...this});
    }
}


const user1 = new User("Milan" , 23 , 21 , "BCA" , '30k/month');
user1.displayDetail();