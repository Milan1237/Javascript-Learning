//trim is a function used to remove leading and trailing spaces of a string

const message = "           Hello there             ";
console.log(message);//           Hello there             
console.log(message.trim()); //trims the spaces from both the end
console.log(message.trimStart());//trims only the leading spaces.
console.log(message.trimEnd());//trims only the trailing spaces.

const userName = "          Milan Kumar Das         ";
console.log(userName.trim().substring(0 , 7));
