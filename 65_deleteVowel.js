const str = "The quick brown fox jumps over the lazy dog";

function deleteVowel(str){
    let vowel = ['a' , 'e' , 'i', 'o' , 'u'];
    let strArray = str.split("");
    for(let i = 0 ; i < strArray.length ; i++){
        if(vowel.includes(strArray[i].toLowerCase())){
            strArray.splice(i , 1);
        }
    }

    return strArray.join("");
}

let result = deleteVowel(str);
console.log(result);