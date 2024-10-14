/**
 * Reverse a sentence words. without changin there position
 * input: this is a string
 * output: siht si a gnirts
 */

const str = 'this is a string';

function reverseStringManual(str){
    let arrOfstr = [];
    let tempStr = [];
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == ' '){
            arrOfstr.push(tempStr);
            tempStr=[];
        }else{
            tempStr.push(str[i]);
        }

        if(i == str.length - 1){
            arrOfstr.push(tempStr) ;
            tempStr = [];
        }
    }

    for(let i = 0; i < arrOfstr.length ; i++){
        let a = 0 ; 
        let b = arrOfstr[i].length-1;
        let value = arrOfstr[i];
        while(a < b){
            let temp = value[a];
            value[a] = value[b];
            value[b] = temp ;
            a++ ;
            b-- ; 
        }
        arrOfstr[i] = value ;
    }

    let result = '';
    for(let i = 0 ; i< arrOfstr.length ; i++){
        for(let j = 0 ; j< arrOfstr[i].length ; j++){
            result+=arrOfstr[i][j];
        }
        result+= ' ';
    }
    return result.trim();
}

const result = reverseStringManual(str);
console.log(result);


function reverseString(str){
    const arrOfstr = str.split(' ');
    for(let i = 0 ; i < arrOfstr.length ; i++){
        arrOfstr[i] = arrOfstr[i].split('').reverse().join('')
    }
    return arrOfstr.join(' ').trim();
}
const output = reverseString(str);
console.log(output);