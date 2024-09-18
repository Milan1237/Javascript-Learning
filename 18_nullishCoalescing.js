// Nullish Coalescing : If the left side is undefined or null then it returns the right hand side only

// example

let number = (null ?? 45);
console.log(number);
// Now the question arrises that we can do the same operation with || operator then why should we use nullis operator ?
//  --> In some of the cases we want to give a variable like 0 , false , "" then the || operator will take it as false and assign the other property

let a = 0 || "invalid value" ;//requirement is we have to assign a to 0
// console.log(a); // invalid value : because the || operator will take 0 , "" , false value as falsy value only

// We will see another example

function or(bar){
    return bar || "invalid value"
};
function nullishCoalescis(bar){
    return bar ?? "invalid value"
};

// let value = or(); // if we do not send any parameter then the default value of bar in the above function will undefined
// let value = or(0); // here we want assign 0 to value but we can not because || operator in the above foo function will take it as a falsy value
// let value = or(false); // here we want assign false to value but we can not because || operator in the above foo function will take it as a falsy value
                    // using nullishCoalescis function
let value = nullishCoalescis(false); // now we can asign 0 , false , "" to this variable using nullishCoalescis
console.log(value);
