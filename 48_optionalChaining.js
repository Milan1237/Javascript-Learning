//Optional chaining is way to access object property inside object property safely.
let obj = {
    name: "stone",
    type:{
        hard: true,
        edible: false
    },
    getUserName(){
        console.log(this.name);
    }
}
//suppose we want to check optional property inside a optional propert:
// console.log(obj.eatable.origin);//error 
console.log(obj.eatable?.origin); //this is how we check wheather eatable is present or not using (.?) operator
console.log(obj["eatable"]?.["origin"]); //this is how we check wheather eatable is present or not using (.?) operator

// we can do it with function too
obj.getUserName();
// obj.getUserAge();//error
obj.getUserAge?.();//no error no output