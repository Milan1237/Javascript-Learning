// syntax 
// stringTobeSearched.includes(substring , starting index from which the search should start);

const string = "I just love to code";
(string.includes("love")) ? console.log("Person loves to code") : console.log("Person doesn't like to code");

const string2 = "I JUST LOVE TO CODE";
console.log(string2.includes("love")); //false : case sensitive

const string3 = "I JUST LOVE TO CODE";
console.log(string3.includes("LOVE" , 10)); //false : starting value index causing the word not be picked

const string4 = "I JUST LOVE TO CODE";
console.log(string4.includes("LOVE" , -2)); //true : if it is < 0 then the whole string will be searched 

const string5 = "I JUST LOVE TO CODE";
console.log(string5.includes("LOVE" , 25)); //false : 2nd argument is not in range  

