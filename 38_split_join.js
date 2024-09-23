/***** split 
 * 
 * syntax : string.split(seperator , * the max length of the array); //*basically the second argument is optional. it decides how many values are going to be there
*/
// let string2 = "may i come in sir"
// let string3 = "may@i@come@in@sir"
// let array = string.split("");//converts into an array from string.each charecter will be a an value of the array
// let array2 = string2.split(" ");//[may , i , come , in , sir];
// let array3 = string3.split("@");//[may , i , come , in , sir];
// console.log(array3);
// let str = "I am there for you but nobody stands by myself";
// let arr = str.split(" " , 4);
// console.log(arr);
// let arr2 = str.split();
// console.log(arr2);// the whole string will be converted into a array value if we do not provide any argument

/***** join */
/** syntax
 *  join(seperator);
 * 
 */
let arr = [1 , 2 , 3 , 4 , 5];
let str = arr.join(); // the default of value of seperator is `,`
console.log(str);
let str2 = arr.join("");//12345
console.log(str2);
let str3 = arr.join("@");//12345
console.log(str3);


//check if palindrome
let string = "malylam";
let newArray = string.split("");//converts the string into array
newArray.reverse();//reverse the array
let reversedString = newArray.join(""); //converts an array into string
console.log(newArray);

reversedString == string ? console.log("it is a palidrome") : console.log("it is not a palindrome");
