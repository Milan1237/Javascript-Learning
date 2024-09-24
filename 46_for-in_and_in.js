//in operator checks wheather the key is present in the object or not. if present it return true and if not it returns false.
const object = {
    userName: "Milan",
    city: "Contai",
    state: "West Bengal",
    country: "India"
}

// let ifKeyPresent = "state" in object;//true
let ifKeyPresent = "block" in object;//false
// console.log(ifKeyPresent);


//Now let us use the for-in to loop over an object

for(let key in object){
    console.log(`${key}: ${object[key]}`);
}