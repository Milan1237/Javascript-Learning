const object = {
    name: "Milan",
    age: 23 ,
    subject : "Coding",
    interest: ["coding" , "Mathematics" , "AI", "Computers" ],
    bio:{
        father: "Ajit Kumar Das",
        mother: "Bandana Das" 
    }
    
}
//keys method returns an array of all the keys present in the object
let keys = Object.keys(object);
console.log(keys);

//values method returns an array of all the values present in the object
let values = Object.values(object);
console.log(values);

//entries method return an array of subarray,consisting  key and value
let entries = Object.entries(object);
console.log(entries); 