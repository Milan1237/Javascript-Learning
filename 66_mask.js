// given a string of numbers mask the last n number
// (string = "123456789101245" , 4) -->> 12345678910####

function maskLastN(str , n){
    let char = "#";
    let subStr = str.slice(0 , str.length - n) + char.repeat(n);
    return subStr;
}
console.log(maskLastN("123456789" , 4));

//mask all the even number string
function getEvenMask(str){
    let result="";
    for(let i = 0 ; i<str.length ; i++){
        i % 2 === 0 ? result+="#" : result+=str[i] ;
    }
    return result ;
}
console.log(getEvenMask("123456789"));