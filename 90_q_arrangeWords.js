/**
 * arrange the words in assending order
 * input: gfg is a learning code
 * output: a is gfg learning platform
 */

let str = 'gfg is a learning platform';

function arrangeWords(str) {
    let arrOfStr = str.split(" ");
    arrOfStr.sort((a, b) => a.length - b.length);
    arrOfStr = arrOfStr.join(' ');
    return arrOfStr;
}

function arrangeWordsManual(str) {
    let arrOfStr = [];
    let tempStr = '';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            arrOfStr.push(tempStr);
            tempStr = "";
        } else {
            tempStr += str[i];
        }

        if(i == str.length-1){
            arrOfStr.push(tempStr);
            tempStr= '';
        }
    }

    for (let i = 0; i < arrOfStr.length; i++) {
        for (let j = 0; j < arrOfStr.length - 1 - i ; j++) {
            if (arrOfStr[j].length > arrOfStr[j+1].length ) {
                let temp = arrOfStr[j];
                arrOfStr[j] = arrOfStr[j+1];
                arrOfStr[j+1] = temp;
            }
        }

    }

    for(let i = 0 ; i < arrOfStr.length; i++){
        result += arrOfStr[i];
        result += ' ';
    }
    console.log(result);
   return result ;
}

let result = arrangeWords(str);
console.log(result);
let manualResult = arrangeWordsManual(str);
console.log(manualResult);