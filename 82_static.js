/**
 * What is static Method
 * What is static property
 * why to use static property
 */

//Static method: Static Method refers to the function which is tied to a class not the object which is created by that class
//Static Property: Id which belongs to the class not the object is called static property ;
//For example, if you want to perform operations on a collection of objects or need utility functions related to the class, static methods are the right choice.
class Children {
    //this is the example of static property
    static id = 1 ;
    constructor(name , age ){
        this.name = name ;
        this.age = age ;
        this.id = Children.id++  ;
    }
    //this is an example of static method
    static filterAge(filterArray , age){
        return filterArray.filter((element)=> element.age > age);
    }
}
const child1 = new Children('Milan', 13);
const child2 = new Children('Kiran', 15);
const child3 = new Children('Santu', 10);
const child4 = new Children('raja', 11);
const child5 = new Children('Rajat', 9);
const child6 = new Children('kola', 11);

console.log(Children.filterAge([child1 , child2 , child3 , child4 , child5 , child6] , 5));

