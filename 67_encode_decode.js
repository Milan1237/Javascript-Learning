/**
 * input "Milan";
 * encode charecter by 2
 * output :"Okncp"
 */

function encode(str , num){
    let result = "";
    for(let i = 0 ; i < str.length ; i++){
        let asci = str.charCodeAt(i);
        asci+=num ;
        result += String.fromCharCode(asci);
    }
    return result ;
}


function decode(str , num){
    let result = "";
    for(let i = 0 ; i < str.length ; i++){
        let asci = str.charCodeAt(i);
        asci-=num ;
        result += String.fromCharCode(asci);
    }
    return result ;
}
console.log("here is the answer" , encode("Milan" , 2));
console.log("here is the answer" , decode(encode("Milan" , 2) , 2));